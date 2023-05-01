import React from 'react'
import './App.css';

const Weather = ({data}) => {
    console.log(data);
    if (!data || !data.weather) {
      console.log('weather data is not defined');
      return null;
    }
  return (
    <div  id="weather" className='relative flex flex-col justify-between w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
    {/* Top */}
    <div className='relative flex ml-[39%] max-w-[500px] mt-20'>
      <div className='flex flex-col items-center'>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt='/'
          width='100'
          height='100'
        />
        <p className='text-white text-2xl'>{data.weather[0].main}</p>
      </div>
      <p className=' text-white text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>
    </div>
    {/* Bottom */}

<div className='bg-black bg-opacity-40 relative p-8 mt-0 rounded-md'>
  <p className='text-2xl text-center pb-6'>Weather in {data.name}</p>
  <div className='flex justify-between text-center'>
      <div>
          <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
          <p className='text-xl'>Feels Like</p>
      </div>
      <div>
          <p className='font-bold text-2xl'>{data.main.humidity}%</p>
          <p className='text-xl'>Humidity</p>
      </div>
      <div>
          <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
          <p className='text-xl'>Winds</p>
      </div>
  </div>
</div>

  </div>
  )
}

export default Weather