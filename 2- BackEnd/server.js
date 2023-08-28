const mongoose = require("mongoose");
const dotEnv = require("dotenv");

dotEnv.config({
    path: "./config.env"
})


// connect to the db: 
const DB = process.env.DATA_BASE.replace("<password>", process.env.PASSWORD)
mongoose.connect(DB).then(() => console.log("Connect to DB"));

//Requier the app:
const app = require("./app")
port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

