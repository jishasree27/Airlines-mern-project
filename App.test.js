import { render, screen } from '@testing-library/react';
import App from './App';

test('renders airline reservation system', () => {
  render(<App />);
  const linkElement = screen.getByText(/Airline Reservation System/i);
  expect(linkElement).toBeInTheDocument();
});

