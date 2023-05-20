import React from 'react'
import Me from './images/me.jpg'
import './Home.css'
import { useState,useEffect } from 'react'
function Home() {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
      const typer = setInterval(() => {
        setDisplayText((prevText) =>
          prevText === 'Full Stack Developer' ? '' : prevText + 'Full Stack Developer'.charAt(prevText.length)
        );
      }, 200);
  
      return () => clearInterval(typer);
    }, []);
  return (
    <div className='container'>
        <h1 className='text-center mt-5 fw-bold '>I am <span className='typer'>{displayText}</span></h1>
        <div className='row'>
            <div className='col-md-1 social d-md-flex flex-column justify-content-center'>
                <a href='https://www.instagram.com' target='_blank'><i className='bi bi-instagram'></i></a>
                <a href='https://www.facebook.com' target='_blank'><i className='bi bi-facebook'></i></a>
                <a href='https://www.linkedin.com' target='_blank'><i className='bi bi-linkedin'></i></a>
                <a href='https://www.github.com' target='_blank'><i className='bi bi-github'></i></a>
            </div>
            <div className='col-md-4'>
                <img src={Me} alt='me' className='img-fluid '></img>
            </div>
            <div className='col-md-7  '>
                <div className='hero-content'>
                    <p>Hi wel come I ma Praveen new beginning</p>
                    <a href='https://drive.google.com/file/d/1sdCl1eXy_o6MeHZHED_6IsT8Vvb7OOYo/view?usp=share_link' className='btn btn-outline-primary px-4'><i className='bi bi-arrow-down-circle-fill me-1'></i>CV</a>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Home