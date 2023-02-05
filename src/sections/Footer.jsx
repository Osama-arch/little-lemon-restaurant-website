import React from 'react';

import Navbar from '../component/Navbar';
import logo from '../assets/icons/logo.png';
import { useState } from 'react';
function Footer() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    console.log('Form submitted');
  };
  return (
    <footer className='footer '>
      <div className='footer-container center'>
        <div className='flex-col'>
          <div className='footer-logo'>
            <img src={logo} alt='logo' className='img' />
          </div>
          <div className='socials'>
            <ul className='socials-list flex-col'>
              <li>
                <a href='https://www.facebook.com/' className='social-link '>
                  <i className='social-icon icon-1'></i>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/' className='social-link '>
                  <i className='social-icon icon-2'></i>
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/' className='social-link '>
                  <i className='social-icon icon-3'></i>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/' className='social-link '>
                  <i className='social-icon icon-4'></i>
                  <span>Youtube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Navbar page={'home'} />

        <div className='third-col'>
          <form className='form' onSubmit={handleSubmit}>
            <label htmlFor='subscribe'>Subscribe!</label>

            <div>
              <input
                type='email'
                name='email'
                value={email}
                id='subscribe'
                placeholder='Type your E-mail'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input type='submit' value='submit' disabled={!email} />
            </div>
          </form>
          <div className='address'>
            <p>53, East Birchwood Ave. Brooklyn, New York 11201, USA.</p>
            <p>contact@littlelemon.com</p>
            <p>{`(123) 456 - 7890`}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
