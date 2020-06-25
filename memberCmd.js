const https = require('https');

async function getMemberOf(env) {
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
        var groupList = JSON.parse(result).items;
        var memberOf = [];
        for(var i=0;i < groupList.length;i++) {
            if(groupList[i].users.includes(env.namespace)) {
                memberOf.push(groupList[i].metadata.name);
            }
        }
        for(var i=0;i < memberOf.length; i++) {
            console.log(memberOf[i]);
        }
        if(memberOf.length == 0) {
            console.log("No groups associated with namespace: "+env.namespace);
        }
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

module.exports.memberOf = getMemberOf;