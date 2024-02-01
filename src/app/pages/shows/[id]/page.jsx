'use client';
import Image from 'next/image';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FaStar } from 'react-icons/fa';
import BookTicketPopup from './../../../Components/BookTicketPopup';

const page = () => {
  const [movie, setMovie] = useState();
  const [popup, setPopup] = useState(false);
  const params = useParams();
  const fetchMovies = async () => {
    try {
      await axios
        .get(`https://api.tvmaze.com/shows/${params.id}`)
        .then((response) => {
          setMovie(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className='px-24 pt-5'>
      <div className='flex flex-row p-5  items-center '>
        <Image
          className='object-contain h-[400px]'
          width={400}
          height={400}
          src={movie?.image?.original}
          alt={movie?.name}
        />
        <div className='flex flex-col ml-5'>
          <p className='text-4xl font-bold'>{movie?.name}</p>

          <div className='flex gap-3 py-2 text-gray-600 font-medium'>
            <p>{movie?.language}</p>
            <p className='flex items-center'>
              <FaStar className='mr-1 text-blue-500' />
              {`${movie?.rating.average ? movie?.rating.average : '-'}/10`}
            </p>
            <p>{`${movie?.runtime ? movie?.runtime : '-'}min`}</p>
          </div>
          <div className=' flex flex-col gap-2'>
            <p>
              <span className='text-gray-500'>Type: </span>
              {movie?.type}
            </p>
            <p>
              <span className='text-gray-500'>Country: </span>
              {movie?.network?.country.name}
            </p>
            <p>
              <span className='text-gray-500'>Gnere: </span>
              {movie?.genres.map((genre) => `${genre} `)}
            </p>
            <p>
              <span className='text-gray-500'>Release date: </span>
              {movie?.premiered}
            </p>
          </div>
          <div className='py-2'>
            <p dangerouslySetInnerHTML={{ __html: movie?.summary }}></p>
            <BookTicketPopup setPopup={setPopup} popup={popup} movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
