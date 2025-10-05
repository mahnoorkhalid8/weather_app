"use client";

interface WeatherCardProps {
    data: any;
}

export default function WeatherCard({data}: WeatherCardProps) {
    const {location, current} = data;

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg mt-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {location.name}, {location.country}
            </h2>

            <div className="flex items-center justify-center gap-6">
                <img src={current.condition.icon} alt={current.condition.text}
                className="w-20 h-20 " />

                <div className="text-left">
                    <p className="text-4xl font-bold text-gray-600">{current.temp_c}°C</p>
                    <p className="capitalize text-gray-600">{current.condition.text}</p>
                    <p className="text-sm text-gray-600">
                        Humidity: {current.humidity}% | Wind: {current.wind_kph} km/h
                    </p>
                </div>
            </div>
        </div>
    );
}