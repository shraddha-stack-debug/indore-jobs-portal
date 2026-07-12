const mongoose =  require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required:true },
    email: {type:String , required:true,unique:true },
    password: {type: String, required: true},
    appliedJobs:[{ 
        type:mongoose.Schema.Types.ObjectId,ref:'Job' //Isse link hoga job model
        }]
});

module.exports = mongoose.models.User||mongoose.model('User', UserSchema);