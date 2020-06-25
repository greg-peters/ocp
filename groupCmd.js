const https = require('https');

async function getGroups(env) {
    var result = '';
    const options = {
        hostname: env.apiHost,
        port: env.apiPort,
        path: '/apis/user.openshift.io/v1/groups',
        method: 'GET',
        rejectUnauthorized: false,
        headers: {
            'Authorization': 'Bearer ' + env.apiToken,
            'Accept':'application/json',
            'Content-Type':'application/json'
         }
    };
    https.get(options, (res) => {
        res.on('data', (d) => {
            result+=d;
        });

    }).on('error', (e) => {
     result.error = e.message;
    }).on('close',function() {
        console.log(JSON.stringify(JSON.parse(result),null,2));
    });
}

async function getGroup(env,group) {
    var result = '';
    const options = {
        hostname: env.apiHost,
        port: env.apiPort,
        path: '/apis/user.openshift.io/v1/groups/'+group,
        method: 'GET',
        rejectUnauthorized: false,
        headers: {
            'Authorization': 'Bearer ' + env.apiToken,
            'Accept':'application/json',
            'Content-Type':'application/json'
         }
    };
    https.get(options, (res) => {
        res.on('data', (d) => {
            result+=d;
        });

    }).on('error', (e) => {
     result.error = e.message;
    }).on('close',function() {
        console.log(JSON.stringify(JSON.parse(result),null,2));
    });
}

module.exports.getGroups = getGroups;
module.exports.getGroup = getGroup;