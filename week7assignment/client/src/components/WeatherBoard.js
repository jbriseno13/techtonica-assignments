import {useState} from 'react'; 



const WeatherBoard = () => {
    const [zip, setZip] = useState(null);
    const [result, setResult] = useState({
      //name: {name:""},
      //name: "",
      main: {temp: 0, 
       feels_like: 0},

      weather: {icon: ""}, 
      
      clouds: {all: 0}, 
      main: {wind: 0},

      wind:{speed:0}
      
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      //const params = new URLSearchParams({ cityName: city });
      //fetch(`/whatstheweather?${params}`)
  
      fetch("http://localhost:8083/whatstheweather")
      
  
      // .then((res => res.json()) =>{
      //   if(response.ok){
      //     return response.json()
      //   }
      // })
  
        .then((res) => res.json())
        .then((data) => {setResult(data);
          console.log(data); 
        })
       
       // console.log(data); 
         setZip("");
        
  
    };
  
  
    return (
      <div className="App">
        <div className="container">
          <h1> Weather Application</h1>
          <div className="top">
            <div className="location">
              <form onSubmit={handleSubmit}>
                <input id="cityname" type="text" placeholder="City" name="city" onChange={(e) => setZip(e.target.value)} value={zip} required />
                <input id="submitbtn" type="submit" value="Enter" onClick={handleSubmit} />
              </form>
              {/* <Placeholder /> */}
            </div>
          </div>
          <div className="result">
            <p>City: {result.name}</p> 
            {/* <p> {result.weather[0].icon} <img style={{ height: "20vh", width: "20vh" }} src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`} className="card-img-top" />/></p> */}
            <p>Temperature: {result.main.temp} °F</p>
            <p> Feels Like: {result.main.feels_like} °F</p>
            <p> Clouds: {result.clouds.all}</p>
            <p> Wind Speed: {result.wind.speed} mph</p>
           
            
          </div>
        </div>
      </div>
    );
  }
  
  export default WeatherBoard;

