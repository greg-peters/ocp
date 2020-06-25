const userCmd = require('./userCmd');
const groupCmd = require('./groupCmd');
const memberCmd = require('./memberCmd');
const bindingCmd = require('./bindingCmd');

module.exports = {
    processCmd: function(env) {
        var args = process.argv;
        for(var i=2;i < args.length; i++) {
            if(args[i] == '-n' || args[i] == '--namespace') {
                env.namespace = args[i+1];
            }
            if(args[i] == '-u' || args[i] == '--user') {
                userCmd.getUser(env,args[i+1]);
            }
            if(args[i] == '-au' || args[i] == '--allusers') {
                userCmd.getUsers(env);
            }
            if(args[i] == '-g' || args[i] == '--group') {
                groupCmd.getGroup(env,args[i+1]);
            }
            if(args[i] == '-ag' || args[i] == '--allgroups') {
                groupCmd.getGroups(env);
            }
            if(args[i] == '-m' || args[i] == '--memberof') {
                memberCmd.memberOf(env);
            }
            if(args[i] == '-ab' || args[i] == '--allbindings') {
                bindingCmd.getBindings(env);
            }
            if(args[i] == '-b' || args[i] == '--binding') {
                bindingCmd.getBinding(env,args[i+1]);
            }
        }
    }
}