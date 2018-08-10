const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var remove=(id)=>{
  Todo.findByIdAndRemove(id).then((res)=>{
    return res;
  }).catch((error)=>{
    return error;
  })
}
module.exports={remove};