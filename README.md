# ocp
A command line application that simplifies viewing the permissions in your openshift cluster.

You should alias this application with the following command

```
alias ocp="node index.js"
```

Show the groups your a member of
```
ocp -m
```

Show cluster role bindings
```
ocp -b
```

Show user information
```
ocp -u <username>
```

Show group information
```
ocp -g <group>
```

