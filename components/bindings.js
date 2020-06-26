const clusterRoleBindings = require('../services/cluster-role-binding-service');
const roleBindings = require('../services/role-binding-service');
const roleService = require('../services/role-service');

function getBindingsByNamespace(env) {
    var promises = [];
    promises.push(clusterRoleBindings.getClusterRoleBindings(env));
    promises.push(roleBindings.getRoleBindingsByNamespace(env));
    return Promise.all(promises);
}

module.exports.getBindingsByNamespace = getBindingsByNamespace;