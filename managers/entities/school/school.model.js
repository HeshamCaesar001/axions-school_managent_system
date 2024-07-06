const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    school_name: {
        type: String,
        required: true
    },
    classes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'class'
        }
    ],
})

module.exports = mongoose.model('school', schoolSchema);
