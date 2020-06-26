const { exec } = require("child_process");
const parser = require("./cmd-parser");

var env = {};
buildEnvironment().then(function() {
    parser.processCmd(env);
});

function buildEnvironment() {
    return new Promise(function(resolve,reject) {
        var envPromises = [];
        envPromises.push(execCmd("oc whoami -t"));
        envPromises.push(execCmd("oc config current-context | cut -d/ -f2 | tr - ."));
        envPromises.push(execCmd("oc config current-context | cut -d/ -f1"));
        Promise.all(envPromises).then(function(results) {
            env.apiToken = results[0];
            env.apiHost = results[1].substring(0,results[1].lastIndexOf(":"));
            env.apiPort = results[1].substring(results[1].lastIndexOf(":")+1);
            env.namespace = results[2];
            resolve();
        }).catch(function(errs) {
            console.log(errs);
            if(errs.indexOf('no token is currently in use for this session') !== -1) {
                console.log("Please use 'oc login' to login to the cluster first");
            }
            reject("oc login required");
        });
    });
}

function execCmd(cmd) {
    return new Promise(function(resolve,reject) {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                reject(error.message);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout.trim());
        });
    });
}