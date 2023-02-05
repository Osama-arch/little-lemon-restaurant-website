function Booking(props) {
  const {
    formState,
    today,
    handleChange,
    handleSubmit,
    index,
    handleBlur,
    guestsError,
  } = props;
  const { availableDate, availableTimes, guests, occasion, textArea } =
    formState;

  return (
    <form className='booking-form ' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='res-date'>Choose Date:</label>
        <input
          type='date'
          id='res-date'
          name='availableDate'
          min={today}
          value={availableDate}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor='res-time'>Choose Time:</label>
        <select
          id='res-time '
          name='availableTimes'
          value={availableTimes[index]}
          onChange={(e) => handleChange(e)}>
          {availableTimes.map((item, index) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
      </div>
      <div>
        <label htmlFor='guests'>Number of Guests:</label>
        <input
          type='number'
          placeholder='1'
          aria-required='true'
          min='1'
          max='10'
          id='guests'
          name='guests'
          value={guests}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />
        {guestsError()}
      </div>
      <div>
        <label htmlFor='occasion'>Occasion:</label>
        <select
          id='occasion'
          name='occasion'
          onChange={(e) => handleChange(e)}
          value={occasion}>
          <option>None</option>
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
          onChange={(e) => handleChange(e)}
          value={textArea}></textarea>
      </div>
      <input type='submit' value='Make your reservation' className='btn' />
    </form>
  );
}

export default Booking;
