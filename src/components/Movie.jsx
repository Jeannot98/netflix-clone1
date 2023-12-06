import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const Movie = ({ item }) => {
    const [like, setLike] = useState(false);
    return (
        <div className='relative cursor-pointer  '>
            <img className='w-[280px] h-[150px] block object-cover' src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white'>
                <p className='line-clamp-1 text-xs md:text-sm font-bold flex justify-center items-center
        h-full text-center'>{item?.title}</p>
                <p>
                    {
                        like ? <FaHeart onClick={()=> setLike(!like)} className='absolute top-4 left-4 text-gray-400' /> : <FaRegHeart onClick={()=> setLike(!like)} className='absolute top-4 left-4 text-gray-400' />
                    }
                </p>
            </div>
        </div>
    )
}

export default Movie