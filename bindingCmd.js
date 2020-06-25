const https = require('https');

async function getBindings(env) {
    var result = '';
    const options = {
        hostname: env.apiHost,
        port: env.apiPort,
        path: '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings',
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

async function getBinding(env,clusterbinding) {
    var result = '';
    const options = {
        hostname: env.apiHost,
        port: env.apiPort,
        path: '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/'+clusterbinding,
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

module.exports.getBindings = getBindings;
module.exports.getBinding = getBinding;