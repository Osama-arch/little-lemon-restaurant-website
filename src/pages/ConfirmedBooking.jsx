import React from 'react';
import Hero from '../sections/Hero';
import { ReactComponent as Check } from '../assets/svg/check.svg';
import { useEffect, useRef } from 'react';
function ConfirmedBooking() {
  const scollToRef = useRef();
  const availableDate = new Date(
    JSON.parse(localStorage.getItem('availableDate'))
  ).toLocaleString('default', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
  const availableTimes = JSON.parse(localStorage.getItem('availableTimes'));
  const guests = JSON.parse(localStorage.getItem('guests'));
  const occasion = JSON.parse(localStorage.getItem('occasion'));

  useEffect(() => {
    window.scrollTo({
      top: scollToRef.current.getBoundingClientRect().top - 80,
      behavior: 'smooth',
    });
  }, []);
  return (
    <>
      <section className='confirmed-booking ' ref={scollToRef}>
        <div className='confirmed-container center'>
          <h3 className='text-center'>Booking Successful!</h3>
          <div>
            <Check className='svg-check' />
          </div>
          <div className='booking-details text-center'>
            <p>you have reserved a table in</p>
            <p> {availableDate}</p>
            <p>at {availableTimes}</p>
            <p>
              guests:
              {guests}
            </p>
            <p>{occasion !== 'None' && `occation: ${occasion}`}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConfirmedBooking;
