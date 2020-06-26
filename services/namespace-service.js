const api = require('./api-service');

function getNamespaces(env) {
    return api.query(env,'/api/v1/namespaces');
}

function getNamespace(env,namespace) {
    return api.query(env,'/api/v1/namespaces/'+env.namespace);
}

module.exports.getNamespaces = getNamespaces;
module.exports.getNamespace = getNamespace;