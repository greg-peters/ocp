const api = require('./api-service');

function getPods(env) {
    return api.query(env,'/api/v1/pods');
}

function getPodsByNamespace(env) {
    return api.query(env,'/api/v1/namespaces/'+env.namespace+'/pods');
}

function getPod(env,pod) {
    return api.query(env,'/api/v1/namespaces/'+env.namespace+'/pods/'+pod);
}

module.exports.getPod = getPod;
module.exports.getPods = getPods;
module.exports.getPodsByNamespace = getPodsByNamespace;