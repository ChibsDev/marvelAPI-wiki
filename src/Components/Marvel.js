import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
export const Marvel = () => {
    const {id}=useParams();
    const [item,setItem]=useState()
    const fetch = async() => {
        const res=await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=752f41a6ace0680e2ebe2972cfb8af08&hash=98f3e7e53878ed77622271c828988867`)
        setItem(res.data.data.results[0])
    }
    fetch();
    return (
    <>
       {
        (!item)? "":(
            <div className='box-content'>
                <div className='right-box'>
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />   
                </div>
             <div className='left-box'>
                <h1>{item.name}</h1>
                <h2 className='hero-description'>{item.description}</h2>
             </div>    
            </div>
        )
       }
    </>
  )
}
