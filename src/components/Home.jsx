import React, { useState, useEffect } from 'react';
import '../App.css'
import CarouselPics from './CarouselPics'



export default function Home() {

    return (
    <>
    <p style={{fontFamily: 'Arial Narrow, sans-serif', fontStyle: 'italic', fontSize: '25px'}}>ASPIRING DEVELOPER, FOODIE AND TRAVELER</p>

    <div className='intro'>
    <p style={{fontFamily: 'Snell Roundhand, cursive', fontSize: '20px'}}>"You define your own life. Don't let other people write your script."
— Oprah Winfrey</p>
    </div>
    
    <div className="carouselpics">
    <CarouselPics />
    </div>
   
   </>
    
    )
}