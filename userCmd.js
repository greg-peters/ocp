const https = require('https');

async function getUsers(env) {
    var result = '';
    const options = {
        hostname: env.apiHost,
        port: env.apiPort,
        path: '/apis/user.openshift.io/v1/users',
        method: 'GET',
        rejectUnauthorized: false,
        headers: {
            'Authorization': 'Bearer ' + env.apiToken,
            'Accept':'application/json',
            'Content-Type':'application/json'
         }
    };
    https.get(options, (res) => {
        // console.log('statusCode:', res.statusCode);
        // console.log('headers:', res.headers);

        res.on('data', (d) => {
            result+=d;
        });

    }).on('error', (e) => {
     result.error = e.message;
    }).on('close',function() {
        console.log(JSON.stringify(JSON.parse(result),null,2));
    });
}

async function getUser(env,username) {
    var result = '';
    const options = {
        hostname: env.apiHost,
        port: env.apiPort,
        path: '/apis/user.openshift.io/v1/users/'+username,
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

module.exports.getUsers = getUsers;
module.exports.getUser = getUser;