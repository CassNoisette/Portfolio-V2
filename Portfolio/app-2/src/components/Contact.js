import React, { useState } from 'react';

import {validateEmail } from '../../utils/helpers';

function Contact(){
    // return(
    //     <div>
    //         <h3>Contact Me</h3>
    //         <p className = "mw-50"> Email: cassandrebeauzil@gmail.com</p>
    //     </div>
    // );
    const [email, setEmail] = useState({name:'', email:'', message:''});

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
              setErrorMessage('Email is invalid.');
            } else {
              setErrorMessage('');
            }
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }   
    }
};

return (
    <div className='center'> 
<h2 className='text-center mb-2'>Contact<span className='text-center mb2'>Me</span></h2>
<p className='mb-2'><a href='cassandrebeauzil@gmail.com'>Email</a></p>
<form id="form" onSubmit={handleSubmit}>
    <label className='form-label' htmlFor='name'>Name:</label>
    <input type="text" name="name" onBlur={handleChange}/>

    <label className='form-label' htmlFor='name'>Email:</label>
    <input type="email" name="email" onBlur={handleChange}/>

    <label className='form-label' htmlFor='Message'>Name:</label>
    <input type="text" name="message" onBlur={handleChange}/>
</form>
    </div>

);

}
export default Contact;