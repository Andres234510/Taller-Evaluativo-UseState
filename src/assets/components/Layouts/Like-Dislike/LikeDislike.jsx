export const LikeDislike = () => {
    
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    // Manejadores para likes y dislikes
      const handleLike = () => {
        setLikes(prevLikes => prevLikes + 1);
      };
    
      const handleDislike = () => {
        setDislikes(prevDislikes => prevDislikes + 1);
      };

    return (
    <div>
        <h2 className="text-xl font-semibold mb-4">Like y Dislike</h2>
        <div className="flex justify-center space-x-4">
          <button onClick={handleLike} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            👍 Like ({likes})
          </button>
          <button onClick={handleDislike} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            👎 Dislike ({dislikes})
          </button>
        </div>
    </div>
    )
}