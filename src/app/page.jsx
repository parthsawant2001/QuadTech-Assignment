'use client';
import Image from 'next/image';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MoviesList from './Components/MoviesList';

export default function Home() {
  const [moviesList, setMoviesList] = useState();
  const fetchMovies = async () => {
    try {
      await axios
        .get('https://api.tvmaze.com/search/shows?q=all')
        .then((response) => {
          setMoviesList(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main className='p-24'>
      <div className='grid grid-rows-4 grid-cols-4 gap-8'>
        {moviesList?.map((movie) => {
          return <MoviesList movie={movie} key={movie.show.id} />;
        })}
      </div>
    </main>
  );
}
