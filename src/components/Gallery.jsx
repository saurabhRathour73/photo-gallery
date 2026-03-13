import { useMemo } from "react";
import PhotoCard from "./PhotoCard";

const Gallery = ({ photos, search, favourites, dispatch }) => {

  // useMemo used to compute filtered photos
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  if (filteredPhotos.length === 0) {
    return <p className="text-center mt-10">No photos found</p>;
  }

  return (
    <div className="grid gap-6 px-6
    grid-cols-2
    sm:grid-cols-3
    lg:grid-cols-4">

      {filteredPhotos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          dispatch={dispatch}
          isFavourite={favourites.includes(photo.id)}
        />
      ))}

    </div>
  );
};

export default Gallery;