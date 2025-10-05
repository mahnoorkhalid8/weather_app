"use client";

interface ForecastCardProps{
    day: any;
}

export default function ForecastCard({day}: ForecastCardProps) {
    const date = new Date(day.date).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
    });

    return (
        <div className="bg-white/10 rounded-xl p-4 flex flex-col items-center shadow-md hover:bg-white/40 transition">
            <p className="font-semibold text-gray-500">{date}</p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} className="w-14 h-14"/>

            <p className="text-sm text-gray-600">{day.day.condition.text}</p>
            <p className="font-bold mt-1 text-gray-600">
                {day.day.maxtemp_c}° / {day.day.mintemp_c}°
            </p>
        </div>
    );
}