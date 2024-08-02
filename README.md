## Authenticator-Webapp
> ReactJs, NodeJs


A very interactive and User friendly web app to authenticate your users.
```Js
const Auth = ( { name, email, pass } ) => {
  database.map((user) => {
    if( email == user.email && user.name == name && user.pass == pass) {
        return true;
      }else{
        return false;
    };
};
```
