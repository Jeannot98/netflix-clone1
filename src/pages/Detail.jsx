import React, { useContext, useEffect, useState } from 'react'
import Main from '../components/Main'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import requests from '../api/Request';
import {urlContext} from '../context/Context';

const Detail = () => {
    const {url} = useContext(urlContext);
    const {id} = useParams();
    const [movies, setMovies] = useState([]);

    const movie = movies[id]

    useEffect(() => {
        axios.get(url).then((resp) => {
            setMovies(resp.data.results)
        })
    }, [])

  return (
    <Main movie={movie}/>
  )
}

export default Detail