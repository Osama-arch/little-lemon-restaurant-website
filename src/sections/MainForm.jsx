/*global fetchAPI:writable, submitAPI:writable*/
import { useReducer, useEffect, useState } from 'react';
import Booking from '../component/Booking';
import { useNavigate } from 'react-router-dom';
const today = new Date().toISOString().split('T')[0];
const formData = () => {
  return {
    availableDate: today,
    availableTimes: fetchAPI(new Date()),
    guests: 1,
    occasion: 'None',
    textArea: '',
  };
};

const updateForm = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};
function MainForm() {
  const [formState, dispatch] = useReducer(updateForm, formData());
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const { availableDate, availableTimes, guests, occasion, textArea } =
    formState;
  useEffect(() => {
    dispatch({
      field: 'availableTimes',
      value: fetchAPI(new Date(availableDate)),
    });
    setIndex(0);
  }, [availableDate]);

  const handleChange = (e) => {
    if (e.target.name === 'availableTimes') {
      const availableTime = e.target.value;
      const findIndex = availableTimes.indexOf(availableTime);
      setIndex(findIndex);
      dispatch({ field: e.target.name, value: availableTimes });
    } else {
      dispatch({ field: e.target.name, value: e.target.value });
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (submitAPI(formState)) {
      localStorage.setItem('availableDate', JSON.stringify(availableDate));
      localStorage.setItem(
        'availableTimes',
        JSON.stringify(availableTimes[index])
      );
      localStorage.setItem('guests', JSON.stringify(guests));
      localStorage.setItem('occasion', JSON.stringify(occasion));
      localStorage.setItem('textArea', JSON.stringify(textArea));
      navigate('/confirmedBooking');
    }
  };
  return (
    <section className='booking center '>
      <h3>Choose Your Loving Place!</h3>
      <Booking
        formState={formState}
        dispatch={dispatch}
        today={today}
        handleChange={handleChange}
        handleSubmit={submitForm}
        index={index}
      />
    </section>
  );
}

export default MainForm;
