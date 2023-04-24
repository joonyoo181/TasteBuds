import React, { useState, useMemo, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import './Swipe.css'
import './components/FoodCard/FoodCard.js'
import FoodCard from './components/FoodCard/FoodCard.js';



  
export default function Swipe() {
  const navigate = useNavigate();

  const handleSwipe = (d) => {
    //fill this your callback
  };
  const arr = [
    {
      image: '1',
      menuName: '2',
      location: '3',
      description: '4',
      tags: '5',
      color: '6',
    },
    {
      image: '7',
      menuName: '8',
      location: '9',
      description: '10',
      tags: '11',
      color: '12',
    },
    {
      image: '13',
      menuName: '22',
      location: '32',
      description: '24',
      tags: '52',
      color: '62',
    },
  ]

  return (
      <>
        <Header/>
        <div className='swipe-page-layout'>
            <h1 className='heading'>Swipe<span>Page</span></h1>
            <div className='swipe-beige-card'>
              
              <div className='swipe-page-border-card'>
                  {arr.map((element) => (
                    <FoodCard image={element['image']} menuName={element['menuName']} />
                  ))}
              </div>
            </div>
      </div>
      </>
  )
}
  
