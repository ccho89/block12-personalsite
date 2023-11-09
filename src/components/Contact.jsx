import React, { useState, useEffect } from 'react';
import '../App.css'
import FormInput from './FormInput'

export default function Contact() {

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
    <div className='fillout'>
    <h3>Fill out the form below and let's keep in touch!</h3>
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