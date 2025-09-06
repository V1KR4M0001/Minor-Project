import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center text-2xl font-bold text-blue-600">
                        MyBrand
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            About
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            Services
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
                    <a href="#" className="block text-gray-700 hover:text-blue-600">
                        Home
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-blue-600">
                        About
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-blue-600">
                        Services
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-blue-600">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;