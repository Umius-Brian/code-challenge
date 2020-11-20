import React from 'react';
import Card from './Card';

// set condition if results are returned
const Articles = ({ articles }) => {
  return (
    <div className='articles'>
      {!articles.length ? (
        <h1>No articles found</h1>
      ) : (
        articles.map((item, i) => (
          <div>
            <Card 
              key={i}
              title={item.title}
              author={item.byline}
              section={item.section.toUpperCase()}  
              url={item.url}
              image={item.multimedia[4].url}
              alt={item.multimedia[4].caption}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Articles;