import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [cityNotFound, setCityNotFound] = useState(false);
  const apiKey = "98ef32044606fc36fa1991c8fbebcf0e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(url);
      if (response.data.cod === "404") {
        setCityNotFound(true);
      } else {
        setWeather(response.data);
        setCity("");
        setCityNotFound(false);
      }
    } catch (error) {
      console.error(error);
      setCityNotFound(true);
    }
  };

  return (
    <div className="App">
      <div>
        <head>
          <title>Weather-Tracker</title>
        </head>

        {/* Search */}
        <h1 className='text-3xl mb-2 mt-2 text-white text-center '>Weather Tracker</h1>

        <div className="relative flex justify-between items-center w-full= m-auto pt-4 px-4 text-white">
          <form onSubmit={fetchWeather} className="flex items-center m-auto p-3 bg-transparent border text-white rounded-2xl">
            <input
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent border-none w-full focus:outline-none text-2xl"
              type="text"
              placeholder="Search city"
            />
            <button className=' border-spacing-1' onClick={fetchWeather}>Search</button>
          </form>
        </div>

        <center>
          {cityNotFound && (
            <p className="flex bg-black text-white mt-10 md:mt-24 justify-center w-96 bg-opacity-40 relative p-12 rounded-md">
              City not found. Please try again.
            </p>
          )}
        </center>

        {/* Weather */}
        {weather.main && <Weather data={weather} />}
      </div>
    </div>
  );
}

export default App;