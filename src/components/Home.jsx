import React, { useState, useEffect } from 'react';
import '../App.css'
import FormInput from './FormInput'


export default function Home() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputs = [
    {
      id:1, 
      name: "name",
      type: "text",
      placeholder: "Name",
      label: "Name"
    },
    {
      id:2, 
      name: "email",
      type: "email",
      placeholder: "E-mail",
      errorMessage: "Please input a valid e-mail address!",
      label: "E-mail",
      required: true,
    },
    {
      id:3, 
      name: "message",
      type: "text",
      placeholder: "Message",
      errorMessage: "100 character limit",
      label: "Message",
      required: true,
      pattern: "^[a-zA-Z]{0,100}$"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  };



    return (
    <>
    <p style={{fontFamily: 'Arial Narrow, sans-serif', fontStyle: 'italic', fontSize: '25px'}}>ASPIRING DEVELOPER, FOODIE AND TRAVELER</p>
    
    <div className='image-carousel'>
    <img className='carousel-image' src='/images/gopchang.jpg' alt="" />
    <img className='carousel-image' src='/images/gala.jpg' alt="" />
    <img className='carousel-image' src='/images/home.jpg' alt="" />
    <img className='carousel-image' src='/images/korea.jpg' alt="" />
    <img className='carousel-image' src='/images/lantern.jpg' alt="" />
    </div>
   
    <div className='intro'>
    <p style={{fontFamily: 'Snell Roundhand, cursive', fontSize: '20px'}}>"You define your own life. Don't let other people write your script."
— Oprah Winfrey</p>
  </div>
  <div className="contactform">
  <form onSubmit= {handleSubmit}> 
  <h2 style={{color: 'rebeccapurple'}}>Contact Form</h2>
    {inputs.map((input) => (
    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
    ))}
     <button>Submit</button>
    </form>
   
    </div>
    </>
    )
}