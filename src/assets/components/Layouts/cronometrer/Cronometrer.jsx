export const Cronometrer = () => {
    
  const [segundos, setSegundos] = useState(0);
  const [isContadorActivo, setIsContadorActivo] = useState(false);
    // Efecto para el contador
  useEffect(() => {
    let intervalo;
    if (isContadorActivo) {
      intervalo = setInterval(() => {
        setSegundos(prevSegundos => prevSegundos + 1);
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [isContadorActivo]);

  // Manejadores del contador
  const startContador = () => {
    setIsContadorActivo(true);
  };

  const stopContador = () => {
    setIsContadorActivo(false);
    setSegundos(0);
  };

  return (
    <div>
          <h2 className="text-xl font-semibold mb-4">Contador de Segundos</h2>
          <p className="text-center text-2xl mb-4">Segundos: {segundos}</p>
          <div className="flex justify-center space-x-4">
            <button onClick={startContador} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Iniciar
            </button>
            <button onClick={stopContador} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Parar
            </button>
          </div>
    </div>
  )
}