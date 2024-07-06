const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    student_class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'class',
        required:true,
    },
    age:{
        type:Number,
    },
    student_school:{
        type:mongoose.mongo.Schema.Types.ObjectId,
        ref:'school',
        required:true
    }
})

module.exports = mongoose.model('school',studentSchema);