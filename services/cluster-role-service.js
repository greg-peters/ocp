const api = require('./api-service');

function getClusterRoles(env) {
    return api.query(env,'/apis/user.openshift.io/v1/clusterroles');
}

function getClusterRole(env,role) {
    return api.query(env,'/apis/user.openshift.io/v1/clusterroles/'+role);
}

module.exports.getClusterRole = getClusterRole;
module.exports.getClusterRoles = getClusterRoles;