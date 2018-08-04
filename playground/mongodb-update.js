const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true},(err,client)=>{
    if(err){
        return console.log("unable to connect the database:",error);
    }
const db=client.db('TodoApp');
db.collection('Todos').findOneAndUpdate({
       _id:new ObjectID("5b64662db288dc0794d11cfa")
},{
    $set:{
        completed:true
}
},{
returnOriginal:false
}
).then((result)=>{
    console.log(result);
});

db.collection('users').findOneAndUpdate(
    {
        _id:new ObjectID("5b646aa59b516c0878f9cdef")
    },{
        $set:{
            name:'Arjun'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }
).then((result)=>{
    console.log(result);
})
});
