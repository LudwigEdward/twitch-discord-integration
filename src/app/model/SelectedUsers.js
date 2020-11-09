const mongoose = require('mongoose')

const SelectedUsersSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true
  }
})
module.exports  = mongoose.model("SelectedUsers", SelectedUsersSchema)