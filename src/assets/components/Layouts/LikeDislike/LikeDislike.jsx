import { useState } from 'react'
export const LikeDislike = () => {
    

  // 2. Like/Dislike Counters
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
    // Like/Dislike Functions
  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };
   
    return (
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
    )
}