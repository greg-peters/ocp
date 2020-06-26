const api = require('./api-service');

function getClusterRoleBindings(env) {
    return api.query(env,'/apis/authorization.openshift.io/v1/clusterrolebindings');
}

function getClusterRoleBinding(env,binding) {
    return api.query(env,'/apis/authorization.openshift.io/v1/clusterrolebindings/'+binding);
}

module.exports.getClusterRoleBinding = getClusterRoleBinding;
module.exports.getClusterRoleBindings = getClusterRoleBindings;