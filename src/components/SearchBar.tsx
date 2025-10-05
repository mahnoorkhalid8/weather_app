"use client";

import { useState} from "react";

interface SearchBarProps {
    onSearch: (location: string) => void;
}

export default function SearchBar({onSearch} : SearchBarProps) {
    const [location, setLocation] = useState("");

    return (
        <div className="flex items-center justify-center gap-2">
            <input
                type="text" placeholder="Enter city name..." value={location} 
                onChange={(e) => setLocation(e.target.value)}
                className="p-2 rounded-md w-60 bg-gray-100 text-black outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button onClick={() => onSearch(location)}
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition">
                Search
            </button>
        </div>
    );
}