const api = require('./api-service');

function getRoleBindings(env) {
    return api.query(env,'/apis/authorization.openshift.io/v1/rolebindings');
}

function getRoleBindingsByNamespace(env) {
    return api.query(env,'/apis/authorization.openshift.io/v1/namespaces/'+env.namespace+'/rolebindings');
}

function getRoleBinding(env,binding) {
    return api.query(env,'/apis/authorization.openshift.io/v1/namespaces/'+env.namespace+'/rolebindings/'+binding);
}

module.exports.getRoleBindings = getRoleBindings;
module.exports.getRoleBindingsByNamespace = getRoleBindingsByNamespace;
module.exports.getRoleBinding = getRoleBinding;