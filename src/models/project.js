const { Double } = require('mongodb')
const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
},{
    timestamps: true
})

projectSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'projects'
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project