import React from 'react';

const Card = ({ title, author, section, url }) => {

  return (
    <div className='card'>
      <a href={url} target='_blank'>{title}</a>
      <h2>{author}</h2> 
      <h3>{section}</h3>
    </div>
  )
};

export default Card;