import { useState } from 'react';

function Booking() {
  const availableTimes = ['17.00', '18.00', '19.00', '20.00', '21.00', '22.00'];
  const [formData, setFormData] = useState({
    resDate: new Date(),
    resTime: '17:00',
    guests: 1,
    occasion: 'Birthday',
    comments: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section className='booking center '>
      <h3>Choose Your Loving Place!</h3>
      <form className='booking-form ' onSubmit={submit}>
        <div>
          <label htmlFor='res-date'>Choose Date:</label>
          <input
            type='date'
            id='res-date'
            name='resDate'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='res-time'>Choose Time:</label>
          <select
            id='res-time '
            name='resTime'
            onChange={handleChange}
            value={formData.resTime}>
            {availableTimes.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor='guests'>Number of Guests:</label>
          <input
            type='number'
            placeholder='1'
            min='1'
            max='10'
            id='guests'
            name='guests'
            onChange={handleChange}
            value={formData.guests}
          />
        </div>
        <div>
          <label htmlFor='occasion'>Occasion:</label>
          <select
            id='occasion'
            name='occasion'
            onChange={handleChange}
            value={formData.occasion}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <div>
          <label htmlFor='text-area'>Do You want to add anything else?</label>
          <textarea
            name='textArea'
            id='text-area'
            cols='2'
            rows='3'
            placeholder='Remember, be nice!'
            onChange={handleChange}
            value={formData.comments}></textarea>
        </div>
        <input type='submit' value='Make your reservation' className='btn' />
      </form>
    </section>
  );
}

export default Booking;
