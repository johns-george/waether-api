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
   
    <div className="bg-[url('/Users/poovathingal/Desktop/weatherapi/src/wallpaperflare.com_wallpaper.jpg')] bg-cover h-screen">
       <div className="flex justify-center pb-4 pt-12"> <h1 className='text-5xl text-white pt-10'>Enter The City</h1></div>
        <div className="flex justify-center ml-6"><input className='w-60 rounded-3xl h-12 text-3xl pl-4 capitalize' onKeyDown={weatherdetails} type="search" value={location} onChange={(e)=>{
          setLocation(e.target.value)
        }} / >
       <IconSearchengin onClick={weatherdetails2}></IconSearchengin>
       </div>
      {data.main!=null && 
     <div className=''>
     <div className="flex justify-center text-6xl text-white pt-20">
        <h1 className=''>{data.name}</h1></div>
      <div className='flex justify-center text-8xl text-white pt-4'>  {data.main?<h1 className=''>{Math.floor(data.main.temp-273)}°C</h1>:null}
      </div>
      <div className="flex text-white text-5xl px- justify-around pt-28 ">
        <div className="">
        {data.main?<p className='text-center'>{data.main.humidity}%</p>:null}
        <h1>Humidity</h1>
        </div>
        <div className="">
          <h1>Feels Like</h1>
          {data.main?<p className='text-center'>{data.weather[0].main}</p>:null}
        </div>
        <div className="">
         {data.main?<p className='text-center'>{data.wind.speed}MPH</p>:null}
        <h1>Wind speed</h1>
        </div>
      </div>
      </div>} 
      </div>
  );
}

export default App;
