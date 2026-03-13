import { useReducer, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import { useFetchPhotos } from "./hooks/useFetchPhotos";
import { favouriteReducer } from "./reducers/favouriteReducer";

function App() {

  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  // load favourites from localStorage
  const initialFav = JSON.parse(localStorage.getItem("favourites")) || [];

  const [favourites, dispatch] = useReducer(
    favouriteReducer,
    initialFav
  );

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100">

      <Header />

      <SearchBar search={search} setSearch={setSearch} />

      <Gallery
        photos={photos}
        search={search}
        favourites={favourites}
        dispatch={dispatch}
      />

    </div>
  );
}

export default App;