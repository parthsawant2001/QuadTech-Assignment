'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const MoviesList = ({ movie }) => {
  return (
    <Link href={`/pages/shows/${movie.show.id}`}>
      <div className='shadow-lg block rounded-md hover:shadow-2xl'>
        <div>
          <Image
            className='rounded object-cover h-[400px] w-full'
            width={280}
            height={280}
            src={movie.show.image?.original}
            alt={movie.show.name}
          />
        </div>
        <div className='p-4'>
          <div className='flex justify-between'>
            <p className='text-lg font-bold'>{movie.show.name}</p>
            <p className='font-bold text-gray-600 flex items-center'>
              <FaStar className='mr-1 text-blue-500' />
              {`${
                movie.show.rating.average ? movie.show.rating.average : '-'
              }/10`}
            </p>
          </div>

          <div className='flex justify-between'>
            <p className=' text-gray-600'>{movie.show.language}</p>
            <p className=' text-gray-600'>
              {movie.show.genres.map((genre) => `${genre} `)}
            </p>
          </div>
          <div className='flex justify-between'>
            <p className='font-bold text-sm '>{`${
              movie.show?.runtime ? movie.show?.runtime : '-'
            } min`}</p>
            <p className='font-bold text-sm '>{movie.show.premiered}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MoviesList;

// {movie.show?.rating?.average}
