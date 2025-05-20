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

  render(<ReservationForm availableTimes={availableTimes}  />);
  const linkElement = screen.getByText("Table reservation form");
  expect(linkElement).toBeInTheDocument();

});

test('tests that submit button is disabled if a number of guests is 0', () => {

  const availableTimes = {availableTimes : ['17:00', '17:30']};
  const handleSubmit = jest.fn();

  render(<ReservationForm availableTimes={availableTimes} onSubmit = {handleSubmit}/>);

  const rangeInput = screen.getByLabelText("Guests:");
  fireEvent.change(rangeInput, {target: {value : "0"}});

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute("disabled");

});

  const availableTimes = {availableTimes : ['17:00', '17:30']};
  const handleSubmit = jest.fn();

describe('Renders the ReservationForm', () => {
beforeEach(() => {
    render(
    <ReservationForm
      availableTimes={availableTimes}
      onSubmit = {handleSubmit}
    />
    );
});

test("First name is required", () => {

  const input = screen.getByPlaceholderText("First name"); 
  expect(input).toHaveAttribute("type", "text");
  expect(input).toBeRequired();

});

test("Date is required", () => {

  const input = screen.getByLabelText("Date:"); 
  expect(input).toHaveAttribute("type", "date");
  expect(input).toBeRequired();

});

test("Ocassion is required", () => {

    const select = screen.getByLabelText("Occasion:");
    const option = screen.getAllByRole('option');
    const optionLabels = option.map((o) => o.textContent);

    expect(select).toBeInTheDocument();
    expect(optionLabels).toEqual(expect.arrayContaining(['Birthday', 'Anniversary', "Business meal"]));
});



});