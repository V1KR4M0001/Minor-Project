import { useState } from "react";

export default function WeatherModal({ onClose }) {
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");

    // Fetch Weather Data
    const fetchWeather = async () => {
        if (!location) return;

        setLoading(true);
        setError("");
        setWeatherData(null);

        try {
            const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

            const res = await fetch(url);
            if (!res.ok) throw new Error("Location not found");

            const data = await res.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl relative">
                {/* Header */}
                <div className="bg-blue-600 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
                    <h2 className="text-lg font-bold">Weather Information Center</h2>
                    <button onClick={onClose} className="text-white text-2xl">&times;</button>
                </div>

                {/* Content */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/assets/weather.jpg"
                            alt="Weather"
                            className="rounded-md mb-4"
                        />
                        <p className="bg-blue-50 text-blue-800 p-2 rounded w-full text-center">
                            Real-time updates every 15 minutes
                        </p>
                        <p className="mt-4 font-medium">Need urgent weather alerts?</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full">
                            Enable Notifications
                        </button>
                    </div>

                    {/* Right Column */}
                    <div>
                        <h3 className="font-bold text-xl text-blue-800">
                            Farm Weather Intelligence
                        </h3>
                        <p className="text-gray-700 mt-1">
                            Protect your crops with accurate weather predictions tailored for agricultural needs:
                        </p>
                        <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
                            <li>Precision rainfall forecasts</li>
                            <li>Temperature & humidity alerts</li>
                            <li>Storm & hail warnings</li>
                            <li>Frost & heatwave advisories</li>
                            <li>Optimal planting windows</li>
                        </ul>

                        <div className="mt-4 bg-gray-50 p-4 rounded">
                            <p className="font-semibold">Check Your Local Weather</p>
                            <div className="flex mt-2">
                                <input
                                    type="text"
                                    placeholder="Enter your village or district"
                                    className="border p-2 flex-1 rounded-l"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                                <button
                                    onClick={fetchWeather}
                                    disabled={loading}
                                    className="bg-blue-500 text-white px-4 rounded-r"
                                >
                                    {loading ? "Loading..." : "Check"}
                                </button>
                            </div>

                            {/* Error */}
                            {error && (
                                <p className="text-red-500 text-sm mt-2">{error}</p>
                            )}

                            {/* Weather Data */}
                            {weatherData && (
                                <div className="mt-4 text-gray-700">
                                    <p className="font-bold text-lg">
                                        {weatherData.name}, {weatherData.sys.country}
                                    </p>
                                    <p className="text-2xl font-semibold">
                                        {Math.round(weatherData.main.temp)}°C
                                    </p>
                                    <p>{weatherData.weather[0].description}</p>
                                    <p>Humidity: {weatherData.main.humidity}%</p>
                                    <p>Wind: {weatherData.wind.speed} m/s</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end p-4 border-t">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
