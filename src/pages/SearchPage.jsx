import { Button, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { SingleContent } from '../components/SingleContent';
import { useState } from 'react';
import { Movies } from './Movies';
import { TVSeries } from './TVSeries';
import { Content } from '../components/Content';

//
export const SearchPage = () => {
  const searchText='j'
  const page = 1
  const [fill,setFill] = useState(1)
  const [type,setType] = useState('')
  return (
    <>
    <div className='text'>
      <TextField type='searchText' id="filled-basic" label="Filled" variant="filled"  /> <SearchIcon style={{height:'60px',width:'50px'}}/>
      
    </div>
    <div className='text'>
      <Button variant="outlined" onClick={setType} >SEARCH MOVIES</Button>‎ <Button variant="outlined" onClick={setType} >SEARCH TV SERIES</Button>
      {fill && (type==='movie'|| type==='tv') && <Content url={`https://api.themoviedb.org/3/search/${type}?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&query=${searchText}&page=${page}`}/>}
      
    </div>
    </>
  )
}


