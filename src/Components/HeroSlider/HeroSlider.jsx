import React from 'react'
import './HeroSlider.css'

import { useState, useEffect  } from "react";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { peopleData } from "../../Utils/Data";


const HeroSlider = () => {
const [people, setPeople] = useState(peopleData)
 const [index, setIndex] = useState(0)



 const nextSlide = () =>{
   setIndex((prevPeople) =>{
    let index = prevPeople + 1;
    if(index > peopleData.length - 1){
      index = 0
    }
    return index;
   })

 }
 const prevSlide = () =>{
   setIndex((prevPeople) =>{
    let index = prevPeople - 1;
    if(index < 0){
      index =peopleData.length -1
    }
    return index;
   })
 }

 useEffect(()=>{
   let autoSlider = setInterval(()=>{
     setIndex((prevPeople) =>{
      let index = prevPeople + 1;
      if(index > peopleData.length - 1){
        index = 0
      }
      return index
     })
    }, 5000)
     return () =>{
      clearInterval(autoSlider)
     }
  }, [index])

  return (
    <div className="section">
      <People
      people = {people}
      index = {index}
      prevSlide = {prevSlide}
      nextSlide = {nextSlide}
      />
    </div>
  )
}

export default HeroSlider



const People = ({people, index,nextSlide, prevSlide }) => {

  return (
    <div className='section-center'>
        <div className="slides">
         
            {people.map((item,personIndex) => {
             
              let position = 'nextSlide';
              
           if(personIndex === index){
            position = 'activeSlide';
           }
           if(personIndex === index-1 ||
             (index === 0 && personIndex === people.length -1)){
            position = 'lastSlide'
           }
              return <article key={item.id} className={position}>
                   <img src={item.image }alt='name'/>
                   
                 </article>
            })}
              
               <button className='prev' onClick={()=> prevSlide()}>
                 <ArrowBackIosNewIcon/>
               </button>
              <button className='next' onClick={()=> nextSlide()}>
                <ArrowForwardIosIcon />
              </button>
        </div>
    </div>
  )
}