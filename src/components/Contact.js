
import './Contact.css';
import React, { useState } from "react";

const Contact =()=>{
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        setEmail(emailValue);

        // Validate email address
        if (!isValidEmail(emailValue)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const isValidEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (e) => {
        // Validate form fields before submitting
        if (!isValidEmail(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }

        const formEle = document.querySelector("form");
        e.preventDefault();
        const formData = new FormData(formEle);
        fetch("https://script.google.com/macros/s/AKfycbz3fQ79YEx3H5mBGPpQLgbSzrDWXD4gj2aYxkVkvmXKHgsWTtvTgqZYI4wbrJid379U/exec", {
            method: "POST",
            body: formData
        }).then((res) => res.json()).then((data) => {
            console.log(data);
        }).catch((error) => console.log(error));

        // Clear form fields after submission
        setFullName('');
        setEmail('');
        setQuery('');
        alert('Form submitted!');
    };

    return(
        <section id='Contact'>
            <h2>Contact</h2>
            <p>Get in Touch</p>

            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <input id='name' name="Name" placeholder='Enter Your Name: ' type="text" value={fullName} onChange={handleFullNameChange} required />
                    <input id='email' name="Email" placeholder='Enter Your Email: ' type="text" value={email} onChange={handleEmailChange} required />
                    {emailError && <p className="error-text">{emailError}</p>}
                    <textarea id='message' name="Message" placeholder='Enter Your Message: ' type="text" value={query} onChange={handleQueryChange} required />
                    <button type="submit">Send</button>
                </form>
            </div>
            
            <p>Connect with me on Social Media</p>
            <footer>
                <a title='Resume' href='https://drive.google.com/file/d/1A7_0o8b5br6g-1cWgJM7XmaFje-O2eXY/view'><img src={require('./images/socials/resume.png')} alt='Resume' /></a>
                <a title='LinkedIn' href='https://www.linkedin.com/in/harsh-verma-782a16231/'><img src={require('./images/socials/linkedIn.png')} alt='LinkedIn' /></a>
                <a title='Github' href='https://github.com/harshverma2609?tab=repositories'><img src={require('./images/socials/github.png')} alt='GitHub' /></a>
                <a title='Instagram' href='https://www.instagram.com/'><img src={require('./images/socials/instagram.png')} alt='Instagram' /></a>
                <a title='E-Mail' href='mailto:harshverma_17@outlook.com'><img src={require('./images/socials/mail.png')} alt='Mail' /></a>
            </footer>
        </section>
    );
}

export default Contact;
