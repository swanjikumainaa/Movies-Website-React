

// import React, { useEffect, useState } from "react";
// import { getMovies } from "../../utils/utilities";
// import ImageContainer from "../../atoms/Image-container";
// import "./style.css";
// import CategoryFilter from "./MovieCategory/MovieCategoryFilter";
// import MovieDetails from "./Details/MovieDetails";

// const MovieList = ({ searchResults }) => {
//   const [movies, setMovies] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedCategoryName, setSelectedCategoryName] = useState("All");
//   const [selectedMovie, setSelectedMovie] = useState(null); // State to store the selected movie for displaying details

//   useEffect(() => {
//     (async () => {
//       const movies = await getMovies();
//       setMovies(movies.results);
//     })();
//   }, []);

//   const handleCategoryChange = (categoryId, categoryName) => {
//     setSelectedCategory(categoryId);
//     setSelectedCategoryName(categoryName);
//   };

//   const handleMovieClick = (movieId) => {
//     setSelectedMovie(movieId); // Setting the selected movie when a movie is clicked
//   };

//   const handleCloseMovieDetails = () => {
//     setSelectedMovie(null); // Resetting the selected movie when closing the details
//   };

//   const filteredMovies =
//     selectedCategory === "all"
//       ? movies
//       : movies.filter((movie) => movie.genre_ids.includes(parseInt(selectedCategory)));

//   const moviesToDisplay = searchResults && searchResults.length > 0 ? searchResults : filteredMovies;

//   return (
//     <div>
//       {selectedCategoryName !== "All" && <h1>{selectedCategoryName} Movies</h1>}

//       <CategoryFilter
//         selectedCategory={selectedCategory}
//         handleCategoryChange={handleCategoryChange}
//       />

//       <div className="movies">
//         {moviesToDisplay.map((item) => (
//           <ImageContainer
//             props={item}
//             key={item.id}
//             onClick={() => handleMovieClick(item.id)} // Calling handleMovieClick when a movie is clicked
//           />
//         ))}
//       </div>

//       {selectedMovie && (
//         // Showing the MovieDetails component if a movie is selected
//         <MovieDetails movieId={selectedMovie} onClose={handleCloseMovieDetails} />
//       )}
//     </div>
//   );
// };

// export default MovieList;

import React, { useEffect, useState } from "react";
import { getMovies } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";
import "./style.css";
import CategoryFilter from "./MovieCategory/MovieCategoryFilter";
import MovieDetails from "./Details/MovieDetails";

const MovieList = ({ searchResults }) => {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCategoryName, setSelectedCategoryName] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState(null); // State to store the selected movie for displaying details

  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      setMovies(movies.results);
    })();
  }, []);

  const handleCategoryChange = (categoryId, categoryName) => {
    setSelectedCategory(categoryId);
    setSelectedCategoryName(categoryName);
  };

  const handleMovieClick = (movieId) => {
    setSelectedMovie(movieId); // Setting the selected movie when a movie is clicked
  };

  const handleCloseMovieDetails = () => {
    setSelectedMovie(null); // Resetting the selected movie when closing the details
  };

  const filteredMovies =
    selectedCategory === "all"
      ? movies
      : movies.filter((movie) => movie.genre_ids.includes(parseInt(selectedCategory)));

  const moviesToDisplay = searchResults && searchResults.length > 0 ? searchResults : filteredMovies;

  return (
    <div>
      {selectedCategoryName !== "All" && <h1>{selectedCategoryName} Movies</h1>}

      <CategoryFilter
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />

      <div className="movies">
        {moviesToDisplay.map((item) => (
          <ImageContainer
            props={item}
            key={item.id}
            onClick={() => handleMovieClick(item.id)} // Calling handleMovieClick when a movie is clicked
          />
        ))}
      </div>

      {selectedMovie && (
        // Showing the MovieDetails component if a movie is selected
        <MovieDetails movieId={selectedMovie} onClose={handleCloseMovieDetails} />
      )}
    </div>
  );
};

export default MovieList;

