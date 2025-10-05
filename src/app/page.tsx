"use client";

import {useState} from "react";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import ForecastCard from "@/components/ForecastCard";

export default function Home() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (location:string) => {
    const trimmedLocation = location.trim();
    if (!trimmedLocation) return alert("Please enter a city name!");

    setLoading(true);
    setWeatherData(null);
    setForecastData(null);

    try {
      const currentResponse = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${trimmedLocation}`
      );
      const forecastResponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${trimmedLocation}&days=5`
      );

      if (!currentResponse.ok || !forecastResponse.ok)
        throw new Error("City not found or API limit reached!");

      const currentData = await currentResponse.json();
      const forecastData = await forecastResponse.json();

      setWeatherData(currentData);
      setForecastData(forecastData.forecast.forecastday);
    }
    catch (error: any) {
      alert(error.message);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center text-center p-4 bg-gradient-to-b from-blue-100 to-blue-300">
       <h1 className="text-3xl font-bold tracking-wide text-blue-800">Weather App</h1>

       <SearchBar onSearch={fetchWeather} />

       {loading && <p className="text-gray-500">Fetching Weather data....</p>} 

       {weatherData && <WeatherCard data={weatherData} />}

       {forecastData && (
        <div>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-500">Next 5 Days</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {forecastData.map((day: any, i:number) => (
              <ForecastCard key={i} day={day} />
            ))}
          </div>
        </div>
      )}
   </main>
  );
}
