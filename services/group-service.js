const api = require('./api-service');

function getGroups(env) {
    return api.query(env,'/apis/user.openshift.io/v1/groups');
}

function getGroup(env,group) {
    return api.query(env,'/apis/user.openshift.io/v1/groups/'+group);
}

module.exports.getGroups = getGroups;
module.exports.getGroup = getGroup;