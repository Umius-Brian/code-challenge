import React from 'react';

// render Card component with props
const Card = ({ title, author, section, url, image, alt }) => {
  return (
    <div className='card'>
      <a href={url} target='_blank' rel="noreferrer">{title}</a>
      <img src={image} alt={alt} />
      <h2>{author}</h2> 
      <h3>{section}</h3>
    </div>
  )
};

export default Card;