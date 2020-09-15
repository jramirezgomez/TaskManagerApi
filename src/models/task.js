const { Double } = require('mongodb')
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: false,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    duration: {
        type: Number,
        default: 0
    },
    projects:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Project'
    },    
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
},{
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task