const clusterRoleBindings = require('../services/cluster-role-binding-service');
const roleBindings = require('../services/role-binding-service');
const roleService = require('../services/role-service');

function getBindingsByNamespace(env) {
    var promises = [];
    promises.push(clusterRoleBindings.getClusterRoleBindings(env));
    promises.push(roleBindings.getRoleBindingsByNamespace(env));
    return Promise.all(promises);
}

function getBinding(env,binding) {
    var promises = [];
    promises.push(roleBindings.getRoleBinding(env,binding));
    return Promise.all(promises);
}

function getNamespacesByBinding(env,binding) {
    return new Promise(function(resolve,reject) {
        roleBindings.getRoleBindings(env).then(function(results) {
            var bindings = [];
            for(var i=0;i < results.items.length; i++) {
                if(results.items[i].metadata.name === binding) {
                    bindings.push(results.items[i]);
                }
            }
            resolve(bindings);
        });
    });
}

module.exports.getBindingsByNamespace = getBindingsByNamespace;
module.exports.getBinding = getBinding;
module.exports.getNamespacesByBinding = getNamespacesByBinding;