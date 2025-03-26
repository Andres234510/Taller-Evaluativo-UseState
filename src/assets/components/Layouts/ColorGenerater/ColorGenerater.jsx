import { useState } from 'react'
export const ColorGenerater = () => {

  // 3. Color Generator
  const coloresAbsolutos = [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", 
    "#FF00FF", "#00FFFF", "#000000", "#FFFFFF", 
    "#808080", "#800000", "#808000", "#800080", 
    "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
  ];
  const [selectedColor, setSelectedColor] = useState(null);


    // Color Generator Function
const generateRandomColor = () => {
  const randomColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
  setSelectedColor(randomColor);
};
    return (
      <div>
      <h2 className="text-xl font-bold mb-4">Color Generator</h2>
      <button 
        onClick={generateRandomColor} 
        className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
        Generate Color
      </button>
      {selectedColor && (
        <div className="mt-4 p-4 text-center rounded-md" style={{ backgroundColor: selectedColor }}>
          Selected Color: {selectedColor}
        </div>
      )}
    </div>
     )
}