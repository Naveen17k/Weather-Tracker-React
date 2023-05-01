import React from 'react'
import './App.css';

const Weather = ({ data }) => {
    console.log(data);
    if (!data || !data.weather) {
        console.log('weather data is not defined');
        return null;
    }
    return (
        <div className='relative flex flex-col justify-between w-full m-auto p-4 text-gray-300 z-10'>
            {/* Top */}
            <div className='relative flex mx-auto max-w-md mt-10'>
                <div className='flex flex-col items-center'>
                    <img
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt='/'
                        className='w-24 h-24'
                    />
                    <p className='text-white text-2xl'>{data.weather[0].main}</p>
                </div>
                <p className=' text-white text-7xl mx-2'>{data.main.temp.toFixed(0)}&#176;</p>
            </div>      {/* Bottom */}
            <div className='bg-black bg-opacity-70 relative p-8 mt-52 rounded-md'>
                <p className='text-xl text-center pb-6'>Weather in {data.name}</p>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='flex flex-col items-center'>
                        <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                        <p className='text-lg'>Feels Like</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='font-bold text-2xl'>{data.main.humidity}%</p>
                        <p className='text-lg'>Humidity</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
                        <p className='text-lg'>Winds</p>        </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;