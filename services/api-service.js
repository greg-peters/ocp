const https = require('https');

module.exports = {
    trustSelfSigned: true,
    query: function(env,api) {
        return new Promise(function(resolve,reject) {
            var result = '';
            const options = {
                hostname: env.apiHost,
                port: env.apiPort,
                path: api,
                method: 'GET',
                rejectUnauthorized: this.trustSelfSigned,
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
                reject(e);
            }).on('close',function() {
                resolve(JSON.parse(result));
            });
        });
    }
}