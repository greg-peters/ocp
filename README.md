# <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/OpenShift-LogoType.svg" width="48" align="top"> OpenShift Permissions Finder
This is a command line application that simplifies viewing the permissions in your openshift cluster.
The goal of this application to to answer the following questions:
<ul>
<li>
"What can this service account/group/user do?"
</li>
<li>
"What groups do this service account/group/user belong to?"
</li>
</ul>

You should alias this application with the following command

```
alias ocp="node index.js"
```

You need to login to your cluster before using this tool
```
oc login
```

Show the groups your a member of
```
$ ocp -m
ocp-admins
```

Show cluster role bindings
```
ocp -b
{...}
```

Show user information
```
ocp -u <username>
{...}
```

Show group information
```
ocp -g <group>
{...}
```

