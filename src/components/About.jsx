import React from 'react';
import '../App.css'

export default function About() {
    return (
    <>
    <h1>About Me</h1>

     <div className='description'>
        <p>I am an introverted extrovert who is always ready to try new things and create lasting memories!</p>
        <p>This journey of discovering and learning code has been challenging to say the least. This test of self-resilience has been a HUGE learning process for me, a challenge that I am still working hard to overcome. I can only hope to one day become an accomplished developer through hard work and show off my skills!</p>
     <div className='aboutme'>
        <h4>Facts About Me:</h4>
        <ul>
            <li>Korean-American, born and raised in New York</li>
            <li>Most people ask, "Are you a dog or cat person?" Neither, I'm a crazy bird lady!</li>
            <li>I live to eat, not eat to live!</li>
        </ul>
    </div>

    </div>
    <img className='profile-img' src='/images/profile.jpg' alt=""/>
    </>
    )
}