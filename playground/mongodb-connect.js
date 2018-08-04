//const MongoClient=require('mongodb').MongoClient
const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true},(err,client)=>{
    if(err){
        return console.log("unable to connect to thae database");
    }

        console.log("Connected to the Database")
            const db=client.db('TodoApp');
            // db.collection('Todos').insertOne({
            //     text:"Something to do",
            //     completed:false
            // },(error,result)=>{
            //     if(error){
            //     return    console.log("unable to insert todo",error);
            //     }
            //     console.log(result.ops);
            // })
// db.collection('users').insertOne({
//     name:"Ridam",
//     age:21,
//     location:"Gorakhpur"
// },(error,result)=>{
// if(error){
//     return console.log("unable to add user"+error);

// }
// console.log(result.ops);
// })
db.collection('users').deleteOne({name:'suman'}).then((result)=>{
    console.log(result);
})
db.collection('Todos').deleteMany({name:'Ridam'}).then((result)=>{
    console.log(result);
})
db.collection('users').deleteMany({name:'Ridam'}).then((result)=>{
   console.log(result);
})
db.collection('users').findOneAndDelete({
    _id: new ObjectID("5b658574145bccbc2f28229b")
}).then((result)=>{
    console.log(result);
})
db.collection('users').find({
name:'Ridam'}).toArray().then((res)=>{
   
    console.log(res);
},(errror)=>{
    console.log("unable to find db",error);
});

    client.close();
})