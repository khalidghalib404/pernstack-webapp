import express from 'express';
import { connectDb } from './config/db.js';
import todoRoutes from "./todoroutes/todoroute.js";
const app = express();


app.use(express.json())
app.use("/api/todos",todoRoutes)

app.listen(5000, ()=>{
    console.log("the server is running on port 5000")
    connectDb()

})

app.get("/", (req, res ) =>{
    res.send ("the server is ready ")
})