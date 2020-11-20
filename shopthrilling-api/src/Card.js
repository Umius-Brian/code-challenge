import React from 'react';

const Card = ({ title, author, section }) => {

  return (
    <div className='card'>
      <h1>{title}</h1>
      <h2>{author}</h2> 
      <h3>{section}</h3>
    </div>
  )
};

export default Card;