import React, { useEffect, useState } from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../api/Request'
import axios from 'axios'

const Home = () => {
  const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular).then((resp) => {
            setMovies(resp.data.results)
        })
        console.log(movies)
    }, [])

    console.log(movies)

  return (
    <div>
        <Main movie={movie}/>
        {console.log(movies)}
        <Row title='Up Coming' fetchUrl={requests.requestUpcoming}/>
        <Row title='Popular' fetchUrl={requests.requestPopular}/>
        <Row title='Trending' fetchUrl={requests.requestTrending}/>
        <Row title='Top Rated' fetchUrl={requests.requestTopRated}/>
        <Row title='Horror' fetchUrl={requests.requestHorror}/>
    </div>
  )
}

export default Home