const api = require('./api-service');

function getReplicationControllers(env) {
    return api.query(env,'/api/v1/replicationcontrollers');
}

function getReplicationControllersByNamespace(env) {
    return api.query(env,'/api/v1/namespaces/'+env.namespace+'/replicationcontrollers');
}

function getReplicationController(env,controller) {
    return api.query(env,'/api/v1/namespaces/'+env.namespace+'/replicationcontrollers/'+controller);
}

module.exports.getReplicationControllers = getReplicationControllers;
module.exports.getReplicationControllersByNamespace = getReplicationControllersByNamespace;
module.exports.getReplicationController = getReplicationController;