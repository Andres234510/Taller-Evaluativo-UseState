export const Color = () => {
    const coloresAbsolutos = [
        "#FF0000", // Rojo
        "#00FF00", // Verde
        "#0000FF", // Azul
        "#FFFF00", // Amarillo
        "#FF00FF", // Magenta
        "#00FFFF", // Cian
        "#000000", // Negro
        "#FFFFFF", // Blanco
        "#808080", // Gris
        "#800000", // Marrón oscuro
        "#808000", // Oliva
        "#800080", // Púrpura
        "#008080", // Verde azulado
        "#C0C0C0", // Plata
        "#FFA500", // Naranja
        "#A52A2A"  // Marrón
      ];

    const [colorselect, setColorSelect] = useState(null);
    const handleGenerarColor = () => {
        const randomColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
        setColorSelect(randomColor);
  };
    return (
        <div>
          <h2 className="text-xl font-semibold mb-4">Generador de Colores</h2>
          <button onClick={handleGenerarColor} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4">
            Generar Color
          </button>
          <div className="w-48 h-24 mx-auto border rounded" /*style={{ backgroundColor: colorselect || 'transparent' }}*/>
            {colorselect && <p className="text-center mt-2">{colorselect}</p>}
          </div>
        </div>
     )
}