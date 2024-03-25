const mongoose  = require('mongoose')
const {app}=require('./app')
const {config}=require('./config')

mongoose.connect(config.MONGO_URL)
    .then(()=>{
        console.log("connected to mongoDB")
    })
    .catch((error)=>{
        console.log(error)
    })

const PORT = process.env.PORT||4200


app.listen(PORT,()=>{
    console.log(`server running: PORT ${PORT}`)
    }
)