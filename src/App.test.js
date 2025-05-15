import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import ReservationForm from './components/ReservationForm';
import { BrowserRouter } from 'react-router';

test('renders navigation link in Nav component', () => {
  render(<Nav />);
  const linkElement = screen.getByText("Order online");
  expect(linkElement).toBeInTheDocument();
});


test('renders navigation link in Footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText("Reservations");
  expect(linkElement).toBeInTheDocument();
});

// ReservationForm test

test('renders Form Title in Reservation Form', () => {

  const availableTimes = {availableTimes : ['17:00', '17:30']};
  const submitForm = jest.fn();

  render(<ReservationForm availableTimes={availableTimes} submitForm = {submitForm}/>);
  const linkElement = screen.getByText("Table reservation form");
  expect(linkElement).toBeInTheDocument();

  
});




