import express from "express"; 
import cors from "cors"; 
import fetch from "node-fetch"; 


const app = express(); 
const PORT = 8081; 

app.use(cors()); 


app .get('/',  (req, res) =>{
    res.json("Hello from 8081");
}); 


app .get('/apiquestions', (req,res) => {
//import body parser
// app .use body parser on line 10. 
// const json = req.body


    fetch("https://opentdb.com/api.php?amount=10")
    .then((res) => res.json())
    .then((data) => {
        res.send(data);
        console.log(data);
    })

})

app .get('/questions',(req, res) =>{
    fetch("")
})


app.listen(PORT,() => console.log(`Hello live from server ${PORT}`)); 