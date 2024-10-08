const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    class_name: {
        type: String,
        required: true
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'class'
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'student'
        }
    ]
})

module.exports = mongoose.model('class', classSchema);
