import React, { useState } from 'react'
import './index.css'
import { Cronometrer } from './assets/components/Layouts/cronometrer/Cronometrer';

export const App = () => {
// Dark/Light Mode
const [isDarkMode, setIsDarkMode] = useState(false);

// 2. Like/Dislike Counters
const [likes, setLikes] = useState(0);
const [dislikes, setDislikes] = useState(0);

// 3. Color Generator
const coloresAbsolutos = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", 
  "#FF00FF", "#00FFFF", "#000000", "#FFFFFF", 
  "#808080", "#800000", "#808000", "#800080", 
  "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
];
const [selectedColor, setSelectedColor] = useState(null);

// Toggle Dark/Light Mode
const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
};

// Like/Dislike Functions
const handleLike = () => {
  setLikes(likes + 1);
};

const handleDislike = () => {
  setDislikes(dislikes + 1);
};

// Color Generator Function
const generateRandomColor = () => {
  const randomColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
  setSelectedColor(randomColor);
};


return (
  <div 
    className={`p-8 min-h-screen transition-all duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-orange-50 text-gray-800'}`}
    style={{ backgroundColor: selectedColor || (isDarkMode ? '#1F2937' : '#FFF7ED') }}
  >
    <div className="max-w-md mx-auto space-y-6">
      {/* Dark/Light Mode Toggle */}
      <div>
        <h2 className="text-xl font-bold mb-4">Mode Toggle</h2>
        <button onClick={toggleDarkMode} className={`w-full py-2 rounded-md transition-colors ${
            isDarkMode 
              ? 'bg-white text-black hover:bg-gray-200' 
              : 'bg-black text-white hover:bg-gray-800'}`}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Like/Dislike Buttons */}
      <div >
        <h2 className="text-xl font-bold mb-4">Like/Dislike</h2>
        <div className="flex justify-between">
          <button onClick={handleLike} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            👍 Likes: {likes}
          </button>
          <button onClick={handleDislike} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            👎 Dislikes: {dislikes}
          </button>
        </div>
      </div>

      {/* Color Generator */}
      <div >
        <h2 className="text-xl font-bold mb-4">Color Generator</h2>
        <button 
          onClick={generateRandomColor} 
          className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Generate Color
        </button>
        {selectedColor && (
          <div 
            className="mt-4 p-4 text-center rounded-md"
            style={{ backgroundColor: selectedColor }}
          >
            Selected Color: {selectedColor}
          </div>
        )}
      </div>

      {/* Timer */}
      <Cronometrer />

      {/* Like/Dislike */}
    </div>
  </div>
)
}
