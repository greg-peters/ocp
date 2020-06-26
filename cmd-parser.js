const bindings = require('./components/bindings');

module.exports = {
    processCmd: function(env) {
        var args = process.argv;
        for(var i=2;i < args.length; i++) {
            if(args[i] == '-b' || args[i] == '--binding') {
                bindings.getBindingsByNamespace(env).then(function(results) {
                    console.log("Cluster Bindings");
                    console.log(JSON.stringify(results[0].items.map(role => role.metadata.name),null,2)); // <-- role bindings
                    console.log("Role Bindings");
                    console.log(JSON.stringify(results[1].items.map(role => role.metadata.name),null,2)); // <-- role bindings
                })
            }
        }
    }
}