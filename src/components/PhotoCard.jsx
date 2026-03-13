import { FaHeart, FaRegHeart } from "react-icons/fa";

const PhotoCard = ({ photo, isFavourite, dispatch }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md group">

      {/* Image */}
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-56 object-cover transition duration-300 group-hover:scale-105"
      />

      {/* Heart Icon */}
      <button
        onClick={() =>
          dispatch({ type: "TOGGLE_FAVOURITE", payload: photo.id })
        }
        className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow"
      >
        {isFavourite ? (
          <FaHeart className="text-red-500 text-lg" />
        ) : (
          <FaRegHeart className="text-gray-700 text-lg" />
        )}
      </button>

      {/* Author Overlay */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
        <p className="text-white font-semibold text-sm">
          {photo.author}
        </p>
      </div>

    </div>
  );
};

export default PhotoCard;