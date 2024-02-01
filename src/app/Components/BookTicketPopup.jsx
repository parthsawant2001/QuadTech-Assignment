import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const BookTicketPopup = ({ popup, setPopup, movie }) => {
  const [seatCounter, setSeatCounter] = useState(1);
  const total = seatCounter * 200;
  const handleClick1 = () => {
    setSeatCounter(seatCounter + 1);
  };
  const handleClick2 = () => {
    setSeatCounter(Math.max(1, seatCounter - 1));
  };

  const finalTickerSummary = () => {
    const userData = {
      movie: movie?.name,
      noOfSeats: seatCounter,
      price: total,
    };
    console.log(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  return (
    <div>
      <button
        onClick={() => setPopup(true)}
        className='self-start rounded bg-blue-500 text-white px-5 py-3 mt-2'
      >
        Book ticket
      </button>
      {popup && (
        <div className='top-0 left-0 w-full h-full absolute flex flex-row items-center justify-center bg-[#0000005d]'>
          <div className='bg-white w-[50%] p-5 rounded-lg flex flex-col justify-center items-center'>
            <div className='flex flex-row w-full items-center justify-end'>
              <button onClick={() => setPopup(false)}>
                <IoClose
                  className='w-6 h-4'
                  style={{ width: '24px', height: '24px' }}
                />
              </button>
            </div>
            <div className='p-4 flex flex-row w-full items-center justify-between'>
              <p>Movie Name: </p>
              <p>{movie?.name}</p>
            </div>
            <div className='p-4 flex flex-row w-full items-center justify-between'>
              <p>Language: </p>
              <p>{movie?.language}</p>
            </div>
            <div className='p-4 flex flex-row w-full items-center justify-between'>
              <p>No of Seats: </p>
              <div className='flex'>
                <button
                  className='rounded bg-blue-500 text-white py-3 px-5'
                  onClick={handleClick2}
                >
                  -
                </button>
                <p className='py-3 px-5'>{seatCounter}</p>
                <button
                  className='rounded bg-blue-500 text-white py-3 px-5'
                  onClick={handleClick1}
                >
                  +
                </button>
              </div>
            </div>
            <div className='p-4 flex flex-row w-full items-center justify-between'>
              <p>Total:</p>
              <p>{total}/-</p>
            </div>
            <button
              onClick={finalTickerSummary}
              className=' rounded bg-blue-500 text-white px-5 py-3 mt-2'
            >
              Book ticket
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookTicketPopup;
