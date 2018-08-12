const bcrypt=require('bcrypt');
var password="ridam@9795"
bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,(error,hash)=>{
        console.log(hash)
    })
});
var hashedPassword='$2b$10$Od315MKWVZnUFCxCocLW1eTqnyusNe37FBMkcJZFjJaOAfzk.rUpO'
bcrypt.compare(password,hashedPassword,(error,result)=>{
    console.log(result);
})



// const jwt=require('jsonwebtoken');
// var data={
//     id:3,
//     name:"ridam"
// }
// var token=jwt.sign(data,"secret");
// console.log(token);

//  var requestToken=jwt.verify(token,"secret");
//  console.log(requestToken);