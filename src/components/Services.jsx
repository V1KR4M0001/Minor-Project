import WeatherWidget from "./WeatherWidget";

const Services = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700">
                    Our Services
                </h2>
                <p className="text-center text-gray-600 mt-2 mb-12">
                    Explore our comprehensive farming solutions
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="text-center">
                            <div className="text-blue-500 text-6xl mb-4">🌦️</div>
                            <h3 className="text-xl font-bold">Weather Alerts</h3>
                            <p className="text-gray-600">
                                Real-time weather conditions and forecasts for your farming area
                            </p>
                            <button className="mt-4 px-4 py-2 border border-blue-400 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
                                Check Weather
                            </button>
                        </div>
                    </div>

                    {/* Right dynamic weather widget */}
                    <WeatherWidget />
                </div>
            </div>
        </section>
    );
};

export default Services;
