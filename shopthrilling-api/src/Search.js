import React, { useState, useEffect, useRef } from 'react';
import Articles from './Articles';
import axios from 'axios';

const Search = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // match search term against title, byline, and section
  const handleChange = e => setSearchTerm(e.target.value);

  // stops initial render
  const initialRender = useRef(true);


  // fetch data from api upon initial render
  // not entirely secure to store env variables in client, however, it's fine for the sake of this app
  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${process.env.REACT_APP_API_KEY}`
      )
      .catch(e => console.log(e));

      const results = result.data.results;

      const filteredResults = results.filter(item => {
        if ((item.section || item.title || item.byline).includes(searchTerm)) {
          console.log(item)
        }
      })

      // console.log(filteredResults)
      
      // only render upon keypress
      if (initialRender.current) {
        initialRender.current = false
      } else {
        setData([]);
        setData(results)
      }
    };
    fetchData();
  }, [searchTerm])

  return (
    <div className='search-results'>
      <input 
        type='text'
        id='input'
        placeholder='Search Science Articles'
        value={searchTerm}
        onChange={handleChange}
      />
      <Articles articles={data}/>
    </div>
  )
}

export default Search;