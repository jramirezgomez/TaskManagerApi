const { Double } = require('mongodb')
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: false,
        trim: true
    },
    // completed: {
    //     type: Boolean,
    //     default: false
    // },
    status: {
        type: String
        , enum: ['in process', 'pause', 'completed']
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


// Hash the plain text password before saving
taskSchema.pre('save', async function (next) {
    const task = this

    if (task.isModified('status')) {
        //user.password = await bcrypt.hash(user.password, 8)
        console.log('test')
    }

    next()
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task