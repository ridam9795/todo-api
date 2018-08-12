const jwt=require('jsonwebtoken');
var data={
    id:3,
    name:"ridam"
}
var token=jwt.sign(data,"secret");
console.log(token);

 var requestToken=jwt.verify(token,"secret");
 console.log(requestToken);