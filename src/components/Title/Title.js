import React from 'react';

import './Title.css';

function Title() {
  return (
    <div className="title-container">
      <h2 className='title'>Your credit score and report.</h2>
      <h2 className='title'>For free, forever.</h2>
      <input type='text' name='emailInput' placeholder='Enter your email' 
      className='email-input'/>
    </div>
  )
}

export default Title;
