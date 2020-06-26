var treeify = require('treeify');
const bindings = require('./components/bindings');
const user = require('./components/user');

module.exports = {
    processCmd: function(env) {
        var args = process.argv;
        for(var i=2;i < args.length; i++) {
            if(args[i] == '-n' || args[i] == '--namespace') {
                env.namespace = args[i+1];
            }
            if(args[i] == '-ba' || args[i] == '--allbindings') {
                bindings.getBindingsByNamespace(env).then(function(results) {
                    console.log("Namespace: "+env.namespace);
                    console.log("Cluster Bindings");
                    console.log(JSON.stringify(results[0].items.map(role => role.metadata.name),null,2)); // <-- role bindings
                    console.log("Role Bindings");
                    console.log(JSON.stringify(results[1].items.map(role => role.metadata.name),null,2)); // <-- role bindings
                })
            }
            if(args[i] == '-b' || args[i] == '--binding') {
                bindings.getBinding(env,args[i+1]).then(function(results) {
                    console.log("Namespace: "+env.namespace);
                    console.log(JSON.stringify(results[0],null,2)); // <-- role bindings
                })
            }
            if(args[i] == '-nb' || args[i] == '--namespace-binding') {
                bindings.getNamespacesByBinding(env,args[i+1]).then(function(results) {
                    console.log(JSON.stringify(results[0],null,2)); // <-- role bindings
                })
            }
            if(args[i] == '-u' || args[i] == '--user') {
                user.getUser(env,args[i+1]).then(function(results) {
                    var foundUser = results[0];
                    var bindings = results[1];
                    var result = {};
                    result[foundUser.metadata.name] = {};
                    for(var i=0;i < bindings.length; i++) {
                        result[foundUser.metadata.name][bindings[i].metadata.name+"(Role Binding)"] = {};
                        result[foundUser.metadata.name][bindings[i].metadata.name+"(Role Binding)"][bindings[i].roleRef.name+"(Role)"] = {};
                    }
                    // result[foundUser.metadata.name].push(bindings);
                    console.log(treeify.asTree(result,true));
                    //console.log(treeify.asTree(bindings,true));
                });
            }
            if(args[i] == '-ua' || args[i] == '--allusers') {
                user.getUsers(env).then(function(results) {
                    console.log(treeify.asTree(results[0].items,true)); // <-- users
                })
            }
        }
    }
}