const express =require("express");
const route=require('./Router/route')
const {moduleURI}=require("./config")
const mongoose=require('mongoose')
//const CORS= require ('cors');
mongoose.connect(moduleURI).then(()=>{console.log("mongodb connected")}).catch((err)=>{console.error(err)})
const app = express();
const PORT = 3000;
app.use(express.json());
//app.use(CORS());
app.use('/api',route)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
