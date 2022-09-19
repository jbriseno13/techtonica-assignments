import express from 'express'; 
import cors from 'cors'; 

const app = express(); 
const PORT=8080; 

app.use(cors()); 

app.get('/', (req, res) => {
    res.json("Hello from J");
});

app.listen(PORT, () => console.log(`Hello from port ${PORT}`)); 