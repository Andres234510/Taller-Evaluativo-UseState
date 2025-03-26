import React, { useState } from 'react'
import './index.css'
import { Cronometrer } from './assets/components/Layouts/cronometrer/Cronometrer';
import { LikeDislike } from './assets/components/Layouts/LikeDislike/LikeDislike';
import { ColorGenerater } from './assets/components/Layouts/ColorGenerater/ColorGenerater';

export const App = () => {
// Dark/Light Mode
const [isDarkMode, setIsDarkMode] = useState(false);


const [selectedColor, setSelectedColor] = useState(null);

// Toggle Dark/Light Mode
const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
};



return (
  <div 
    className={`p-8 min-h-screen transition-all duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-orange-50 text-gray-800'}`}
    style={{ backgroundColor: selectedColor || (isDarkMode ? '#1F2937' : '#FFF7ED') }}>
    <div className="max-w-md mx-auto space-y-6">
      {/* Dark/Light Mode Toggle */}
      <div>
        <h2 className="text-xl font-bold mb-4">Mode Toggle</h2>
        <button onClick={toggleDarkMode} className={`w-full py-2 rounded-md transition-colors ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Like/Dislike Buttons */}
      <LikeDislike />

      {/* Color Generator */}
      <ColorGenerater />

      {/* Timer */}
      <Cronometrer />

      {/* Like/Dislike */}
    </div>
  </div>
)
}
