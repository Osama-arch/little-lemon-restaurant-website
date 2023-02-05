/*global fetchAPI:writable, submitAPI:writable*/
import { render, screen } from '@testing-library/react';

import BookingForm from './component/BookingForm';

describe(' Form', () => {
  test('User is able to submit the form if the score is lower than 5 and additional feedback is provided', () => {
    const today = new Date().toISOString().split('T')[0];
    const formState = {
      availableDate: today,
      availableTimes: ['17.30'],
      guests: 1,
      occasion: 'None',
      textArea: '',
    };
    const submitForm = jest.fn();
    const handleChange = jest.fn();
    const dispatch = jest.fn();
    const index = 0;
    render(
      <BookingForm
        formState={formState}
        dispatch={dispatch}
        today={today}
        handleChange={handleChange}
        handleSubmit={submitForm}
        index={index}
      />
    );
    const headingElement = screen.getByText('17.30');
    expect(headingElement).toBeInTheDocument();
  });
});
