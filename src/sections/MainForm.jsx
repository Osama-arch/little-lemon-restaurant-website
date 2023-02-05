/*global fetchAPI:writable, submitAPI:writable*/
import { useReducer, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../component/BookingForm';
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
// Start Component
function MainForm() {
  const [formState, dispatch] = useReducer(updateForm, formData());
  const [isValid, setIsVAlid] = useState(true);
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
      setIsVAlid(true);
    }
  };
  const handleBlur = (e) => {
    if (e.target.name === 'guests') {
      const value = e.target.value;
      if (!value || value > 200 || value < 1) {
        setIsVAlid(false);
        dispatch({ field: e.target.name, value: 1 });
      }
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
  const guestsError = () => {
    if (!isValid) {
      return (
        <span className='error-form'>the number must be between 1 and 200</span>
      );
    }
  };
  return (
    <section className='booking center '>
      <h3>Choose Your Loving Place!</h3>
      <BookingForm
        formState={formState}
        dispatch={dispatch}
        today={today}
        handleChange={handleChange}
        handleSubmit={submitForm}
        index={index}
        handleBlur={handleBlur}
        isValid={isValid}
        guestsError={guestsError}
      />
    </section>
  );
}

export default MainForm;
