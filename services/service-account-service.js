const api = require('./api-service');

function getServiceAccounts(env) {
    return api.query(env,'/api/v1/serviceaccounts');
}

function getServiceAccount(env,account) {
    return api.query(env,'/api/v1/serviceaccounts/'+account);
}

module.exports.getServiceAccounts = getServiceAccounts;
module.exports.getServiceAccount = getServiceAccount;