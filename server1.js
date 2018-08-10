const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true});
var mongo=mongoose.model('Mydata',{
    text:{
        type:String,
        required:true,
        minlength:2,
        maxlength:30,
        trim:true,
        default:"No property set"
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

var newMongo=new mongo({
   text:"Hey i m using mongoose" 
});
newMongo.save().then((result)=>{
    console.log(result)
},(err)=>{
    console.log(err);
})
var myMongo=new mongo({
    text:'My second attempt',
        completed:true,
        completedAt:1213


});
myMongo.save().then((result)=>{
    console.log(result);
},(err)=>{
    console.log(err);

}) 
var user=mongoose.model('newUser',{
    email:{
        type:String,
        trim:true,
        minlength:1,
        required:true
    }
});
var newUser=new user({
    email:'ridamnagar11@gmail.com'
});
newUser.save().then((res)=>{
    console.log(res);
},(error)=>{
console.log(error);

})