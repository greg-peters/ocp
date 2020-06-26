const api = require('./api-service');

function getUsers(env) {
    return api.query(env,'/apis/user.openshift.io/v1/users');
}

function getUser(env,username) {
    return api.query(env,'/apis/user.openshift.io/v1/users/'+username);
}

module.exports.getUsers = getUsers;
module.exports.getUser = getUser;