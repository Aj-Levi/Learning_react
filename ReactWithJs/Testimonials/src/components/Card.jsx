import React from 'react';

const Card = ({imageURL,title,rating,price}) => {
  return (
    <div className="w-80 p-4 bg-green-50 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img className="w-full h-80 object-cover rounded-t-lg" alt="Card Image" src={imageURL} />
      <div className="p-4">
        <h2 className="text-xl font-semibold underline decoration-3 underline-offset-4 mb-2">{title}</h2>
        <div className="text-yellow-400 mb-2">
          {Array.from({ length: rating }, (_, i) => (
            <span key={i}>★</span>
          ))}
          {Array.from({ length: 5 - rating }, (_, i) => (
            <span key={i + rating}>☆</span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <button className="w-30 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400">
            {`₹ ${price}`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
