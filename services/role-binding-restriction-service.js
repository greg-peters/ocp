const api = require('./api-service');

function getRoleBindingRestritions(env) {
    return api.query(env,'/apis/authorization.openshift.io/v1/rolebindingrestrictions');
}

function getRoleBindingRestrictionsByNamespace(env) {
    return api.query(env,'/apis/authorization.openshift.io/v1/namespaces/'+env.namespace+'/rolebindingrestrictions');
}

function getRoleBindingRestriction(env,restriction) {
    return api.query(env,'/apis/authorization.openshift.io/v1/namespaces/'+env.namespace+'/rolebindingrestrictions/'+restriction);
}

module.exports.getRoleBindingRestritions = getRoleBindingRestritions;
module.exports.getRoleBindingRestrictionsByNamespace = getRoleBindingRestrictionsByNamespace;
module.exports.getRoleBindingRestriction = getRoleBindingRestriction;