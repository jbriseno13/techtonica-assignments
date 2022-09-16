// import express from 'express'; 
// import cors from 'cors'; 
// import fetch from "node-fetch";
// import { config } from "dotenv";
// config();

// const app = express(); 
// const PORT = 8081; 

// app.use(cors());



// //ROUTE FOR THE INDEX
// app.get('/', (req, res) =>{
//     res.json(data)
// })

// let URL = `https://api.openweathermap.org/data/2.5/weather?zip=95825,&appid=${process.env.API_KEY}`



// app.get('/whatstheweather', (req, res) => { 
//     fetch(URL) 
//     .then((response) => response.json()) 
//     .then((data) => { res.send(data); 
//     }); 
// })

// app.listen(PORT, () => console.log(`This a live test! Server running on Port http://localhost: ${PORT}`)); 



// //const APIKEY = "d830375667a8378e94d3a22c8d632600";

// // app.get('/whatstheweather', (req, res)=> {
// //     const lat = req.query.lat;
// //    const lon = req.query.lon;
// //    const apiKey = process.env.API_KEY; 
// //     const params = new URLSearchParams ({
// //         lat: req.query.lat,
// //         lon: req.query.lon,
// //         appid: APIKEY,
// //         units: "imperial"
// //     });


//    // url +=  (new URLSearchParams(params)).toString(); 

//     console.log(url); 

//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//             res.send({data})
//         }) 
//         .catch((err) => {
//             console.log(err);
//         });

// //})

// fetch("http://localhost.8081/whatstheweather")
// .then((response) => {
//     if(response.ok) {
//         return response.json();
//     }else{
//         throw new Error("Error");
//     }
// })
// .then((data) => {
// setWeatherData(data); 
// console.log(weatherData); 

// })










// //Create an Array of students
// app.get('/api/students', (req, res) => {
// const STUDENTS = [
//     {firstname: "Critina", lastname: "Rodriguez"}, 
//     {firstname: "Joslyn", lastname: "Briseno"}, 
//     {firstname: "Diana", lastname: "Olivas"},
//     {firstname: "Paola", lastname: "Trejo"},
//     {firstname: "Linda", lastname: "Lee"} 

// ]

// res.json(STUDENTS)

// })


// // this is the server index
// import express from 'express';
// import cors from 'cors';
// //import Server from './server';
// import fetch from "node-fetch";
// import { config } from "dotenv";
// config();

// console.log(`Your api key is ${process.env.API_KEY}`);

// const app = express();
// const PORT = 8081;

// app.use(cors());
// app.get('/', (req, res) => { //endpoint for root/
//     res.json("Hello from Techtonica")
// })

// app.get("/whatstheweather", (req, res) => {
//     const city = req.query.cityName;
//     const apiKey = process.env.API_KEY;
//     const params = new URLSearchParams({
//         q: 'Sacramento',
//         lat: '38.5892',
//         lon: '-121.4057',
//         appid: process.env.API_KEY,
//         units: "imperial",
//     });
    
//     const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
//     console.log(url);
//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//             res.send({ ...data });
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });
// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
// });

import cors from 'cors';
import express from "express";
import fetch from "node-fetch";

import { config } from "dotenv";
config();

console.log(`Your api key is ${process.env.API_KEY}`);

const app = express();

// //Set the port that you want the server to run on
const PORT = 8083;
app.use(cors());



// //ROUTE FOR THE INDEX
app.get('/', (req, res) =>{
    res.json("Hello, please work");
})

let URL = `https://api.openweathermap.org/data/2.5/weather?zip=95825,&APPID=${process.env.API_KEY}&units=imperial`;

app.get('/whatstheweather', (req, res) => { 
    fetch(URL) 
    .then((response) => response.json()) 
    .then((data) => { res.send(data); 
    }); 
})



app.listen(PORT, () => console.log(`This a live test! Server running on Port http://localhost: ${PORT}`)); 