import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  // fetch data from api upon initial render
  // not entirely secure to store env variables in client, however, it's fine for the sake of this app
  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${process.env.REACT_APP_API_KEY}`
      )
      .catch(e => console.log(e))

      console.log(result)
      
    };
    fetchData();
  })

  return (
    <div className='search-results'>
      <input 
        type='text'
        id='input'
        placeholder='Search Science Articles'
        value={searchTerm}
      />
    </div>
  )
}

export default Search;