import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Movie from './Movie';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import {urlContext} from '../context/Context';

const Row = ({title, fetchUrl}) => {
    const {setUrl} = useContext(urlContext);
    const [movies, setMovies] = useState([]);
    
    useEffect(()=>{
        axios.get(fetchUrl).then((reps)=>{
            setMovies(reps.data.results)
        })
    },[])

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        
        <div className='flex items-center justify-center '>
        <Splide options={{perPage:5, gap:'0.5rem', drag: 'free' }}>
            {
                movies.map((item, id)=>(
                    <SplideSlide key={id} onClick={()=>setUrl(fetchUrl)}>
                        <Link to={`/detail/${id}`}><Movie item={item} id={id}/></Link>
                    </SplideSlide>
                ))
            }
            </Splide>
        </div>
        
    </>
  )
}

export default Row