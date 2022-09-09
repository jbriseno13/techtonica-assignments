import React, { useState } from 'react'
import './App.css';
import WeatherBoard from './components/WeatherBoard.js';


function App() {
  


  return (
    <div className="App">
     <WeatherBoard/>
      
    </div>
  );
}

export default App;

{/* <p>City:{" "} <span className="data"> {data.lat.temp[0].city}{" "} </span>{" "}</p> */}

{/* <p>Temperature:{" "} <span className="data"> {data.current.temp[0].temperature}{" "} </span>{" "}</p>
<p> Feels Like: {" "} <span className="data"> {data.current.feels_like[0].feels_like}{" "} </span>{" "}</p>
<p> Humidity:{" "} <span className="data"> {data.current.humidity[0].humidity}{" "} </span>{" "}</p> */}
