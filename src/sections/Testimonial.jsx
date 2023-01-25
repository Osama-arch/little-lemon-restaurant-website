import React from 'react';
import UserRate from '../component/UserRate';

function Testimonial() {
  return (
    <section className='testimonial-section '>
      <h4>What our costumers say!</h4>
      <div className='testimonial-container center'>
        <UserRate />
      </div>
    </section>
  );
}

export default Testimonial;
