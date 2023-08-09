import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';


const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Movie 1',
      description: 'Description for Movie 1',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0amG-FcbFsBuvcFylCee6zpmD618C-w3TTsfv8gMzebXBj4PDeu3hIIvamYtnPB3isAw&usqp=CAU',
      rating: 4.5,
    },
    // Add more movie objects here...
  ]);

  const [filteredTitle, setFilteredTitle] = useState('');
  const [filteredRating, setFilteredRating] = useState('');

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filteredTitle.toLowerCase()) &&
      (!filteredRating || movie.rating >= parseFloat(filteredRating))
  );

  const handleTitleChange = (event) => {
    setFilteredTitle(event.target.value);
  };

  const handleRatingChange = (event) => {
    setFilteredRating(event.target.value);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onTitleChange={handleTitleChange} onRatingChange={handleRatingChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
