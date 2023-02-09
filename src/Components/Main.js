import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import axios from 'axios';
export const Main = () => {
    const[url,setUrl]= useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=752f41a6ace0680e2ebe2972cfb8af08&hash=98f3e7e53878ed77622271c828988867")
    const[item,setItem]=useState();
    const [search,setSearch]=useState("");
    useEffect(() => {
        const fetch=async()=> {
            const res=await axios.get(url)
            setItem(res.data.data.results);
        }
        fetch();
    },[url])

    const searchMarvel=()=>{
        setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=752f41a6ace0680e2ebe2972cfb8af08&hash=98f3e7e53878ed77622271c828988867`)
      }

  return (
    <>
       <div className='header'>
        <div className='bg'>
            <img src='./images/bg12.jpg' alt=''></img>
            <div className='bg-p'>
            <p className='underline'>Marvel Wiki Lite</p> <p>&nbsp; is a simple marvel info site using Marvel Api</p>
            </div>
        </div>
            
            <div className='search-bar'>
                <img src='./images/Marvel_logo.png' alt=''></img>

                <input type="search" placeholder='Search Here'
                    className='search'
                    onChange={e=>setSearch(e.target.value)}
                    onKeyPress={searchMarvel}/>
            </div>


        
       </div> 
       <div className='content'>
        <Card/>
        {
            (!item)?<p>Not Found</p>:<Card data={item}/>
        }
       </div>
    </>
  )
}

