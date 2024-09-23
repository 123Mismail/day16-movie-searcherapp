
"use client"
import React, { ChangeEvent, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { RiStarLine } from "react-icons/ri";
import { IoCalendarClear } from "react-icons/io5";
 import Loader from "@/components/loader"
  //  response types
  interface responseType{
    Poster:string;
    Title:string;
    Plot:string;
    Released:string;
    imdbRating:string;
    Genre:string;
    Director:string;
    Actors:string;
    runtime:string
} 

const MovieSearchApp = () => {
const [loading,setLoading]=useState(false);
const [isSearch,setSearch] =useState(false)
const [error ,setError] =useState(null) 
const [movieDetails , setMovieDetails]=useState<responseType | null>  (null)
const [searchTerm,setSearchTerm] =useState("")
    // fetching api of movie



  
    const handleSearch = async (): Promise<void> => {
        console.log(searchTerm)
        setLoading(true);
        setError(null);
        
        try {
          const response = await fetch(
              `http://www.omdbapi.com/?t=${searchTerm}&apikey=6db2c5a8`);
              console.log(response,"api response response constant"); // ok hy
              
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log(data,"after json data constatn value") // ok
          if (data.Response === "False") {
            throw new Error(data.Error);
          }
          setMovieDetails(data);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoading(false);
          setSearchTerm("")
        }
        
      };
     
   const handleOnchange=(e:ChangeEvent<HTMLInputElement>)=>{

          console.log(movieDetails,"at onchange method")
      let val=e.target.value;
      setSearchTerm(val)
     
   }
   console.log(movieDetails,"trynig to fetch specific vlaues");

  return (
    <div className='flex justify-center items-center h-screen w-full '>
        <div className='max-w-[500px] min-h-[25vh] w-full rounded-xl bg-gray-100 shadow-2xl gap-y-3 group'>
           <div className='text-center mt-6'>
            <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl mb-2">Movie Search </h1>
            <p className="scroll-m-20 text-xl font-medium tracking-tight">Search for any movies and display details.</p>
           </div>
           {/* search component */}
           <div className='p-2 flex space-x-3 justify-center mx-auto text-center mt-3'>
           <Input  className={`max-w-[70%] ${isSearch ? "hidden" : "block"} `} placeholder='Enter movie name here..'
           value={searchTerm}
           onChange={handleOnchange}
           />
           <Button   className={`bg-black text-white rounded-lg ${isSearch ?"w-full" : ""}`}
           onClick={()=>{handleSearch() , setSearch(!isSearch)}}
           >{isSearch ? "Close" : "Search"}</Button>
           </div>

           {/* movie detail will be display here */}
           { loading ? <Loader/> : 
            <div className={`${isSearch ? "block" :" hidden"}`}>
            {/* movie image   */}
            {error ? <div className='flex justify-center items-center'>
              <h4 className='text-3xl text-center mt-3 mb-5 text-red-500'>{error} try for another movie!</h4>
                </div> : <>
                <div className='flex justify-center  '>
              
              <Image src={movieDetails?.Poster !=="N/A"  ? movieDetails?.Poster as any : require('../../public/allOne.jpeg') } width={200} height={200} className='rounded-2xl' alt='name' />
              </div>
              {/* movie details */}
              {movieDetails && 
               <div className='mx-auto text-center p-3 gap-2'>
               <h2 className="scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl mb-2 capitalize">{movieDetails?.Title}</h2>
              
              <div className='flex justify-center space-x-3'>
               <p className='flex jsutify-center mr-6 items-cenetr'><IoCalendarClear className=''/> {movieDetails?.Released}</p>
               <p className='flex justify-center'><RiStarLine className='mr-1'/> {movieDetails?.imdbRating}</p>
              </div >
              <p> <span className='font-semibold text-lg'>Genre</span>:{movieDetails?.Genre}</p>
              <p> <span className='font-semibold text-lg'>Story</span>:{movieDetails?.Plot}</p>
              <p> <span className='font-semibold text-lg'>Director</span> :{movieDetails?.Director}</p>
              <p> <span className='font-semibold text-lg'>Actors</span> :{movieDetails?.Actors}</p>
              <p> <span className='font-semibold text-lg'>Runtime</span> : 163m</p>
              </div>
              }
                </>}
           
           
            </div >
           }
          
           
        </div>
    </div>
  )
}

export default MovieSearchApp