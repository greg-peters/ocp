const api = require('./api-service');

function getRoles(env) {
    return api.query(env,'/apis/user.openshift.io/v1/roles');
}

function getRolesByNamespace(env) {
    return api.query(env,'/apis/user.openshift.io/v1/namespaces/'+env.namespace+'/roles');
}

function getRole(env,role) {
    return api.query(env,'/apis/user.openshift.io/v1/namespaces/'+env.namespace+'/roles/'+role);
}

module.exports.getRole = getRole;
module.exports.getRoles = getRoles;
module.exports.getRolesByNamespace = getRolesByNamespace;