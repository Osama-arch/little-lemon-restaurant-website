import React from 'react';
import UseRate from '../component/UserRate';

function Testimonial() {
  return (
    <section className='testimonial'>
      <div className='testimonial-container'>
        <h4>What our costumers say!</h4>
        <UseRate />
      </div>
    </section>
  );
}

export default Testimonial;
