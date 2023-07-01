import {useState} from 'react'
import './App.css';
import axios from 'axios'
import IconSearchengin from './svgsearchicon';
function App() {
  const [location,setLocation]=useState('')
  const [data,setData]=useState({})
  const weatherdetails=((e)=>{
    if(e.key=='Enter' || e.onClick)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7c4af55a12cf759dd53f632a04c6e881`).then((response)=>{
      setData(response.data)
    })
  })
  const weatherdetails2=(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7c4af55a12cf759dd53f632a04c6e881`).then((response)=>{
      setData(response.data)
    })
  })
  return (
   
    <div className="weatherApp">
      <div className="searchbar">
       <div className="searchbar2"> <h1>Enter The City</h1></div>
        <div className="searchbarinput"><input className='searchbarinput2' onKeyDown={weatherdetails} type="search" value={location} onChange={(e)=>{
          setLocation(e.target.value)
        }} / >
       <IconSearchengin onClick={weatherdetails2}></IconSearchengin>
</div>
</div>
      {data.main!=null && 
     <div className='bottom'>
     <div className="weatherdetails">
        <h1 className='cityName'>{data.name}</h1>
        {data.main?<h1 className='temp'>{Math.floor(data.main.temp-273)}°C</h1>:null}
      </div>
      <div className="additional">
        <div className="humidity">
        {data.main?<p>{data.main.humidity}%</p>:null}
        <h1>Humidity</h1>
        </div>
        <div className="sky">
          <h1>Feels Like</h1>
          {data.main?<p className='feeling'>{data.weather[0].main}</p>:null}
        </div>
        <div className="windspeed">
         {data.main?<p>{data.wind.speed}MPH</p>:null}
        <h1>Wind speed</h1>
        </div>
      </div>
      </div>} 
      </div>
  );
}

export default App;
