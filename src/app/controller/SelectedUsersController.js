const SelectedUsers = require("../model/SelectedUsers")


  const selectedUsersStore = async (username,res) =>{
    const data = await new SelectedUsers(username).save();
    return res.json(data);
  }
  const selectedUsersIndex = async (req,res) =>{
    const data = await SelectedUsers.find({})
    return res.json(data)
  }

module.exports ={selectedUsersStore,selectedUsersIndex}