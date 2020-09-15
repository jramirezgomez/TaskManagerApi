const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const projectRouter = require('./routers/project')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(projectRouter)


app.listen(port,() => {
    console.log('Server is up on port ' + port)
})



//const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'keepcalmisatest', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'keepcalmisatest')
//     console.log(data)
// }

// myFunction()