const userService = require('../services/user-service');
const bindingService = require('../services/role-binding-service');

function getUser(env,user) {
    var promises = [];
    promises.push(userService.getUser(env,user));
    promises.push(
        new Promise(function(resolve,reject) {
            bindingService.getRoleBindings(env).then(function(bindings) {
                var results = [];
                for(var i=0;i < bindings.items.length; i++) { //for every binding
                    for(var ii=0; ii < bindings.items[i].subjects.length; ii++) { //get subject
                        var subject = bindings.items[i].subjects[ii];
                        if(subject.kind === "User" && subject.name === user) {
                            results.push(bindings.items[i]);
                        }
                    } 
                }
                resolve(results);
            });
        })
    );
    return Promise.all(promises);
}

function getUsers(env) {
    var promises = [];
    promises.push(userService.getUsers(env));
    return Promise.all(promises);
}

module.exports.getUser = getUser;
module.exports.getUsers = getUsers;