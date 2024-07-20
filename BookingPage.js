// BookingPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './BookingPage.css';

function BookingPage() {
  const { flightId } = useParams();

  // Fetch or filter flight data based on flightId
  // Placeholder flight data; replace with actual data fetching logic
  const flights = [
    // Your flight data
  ];

  const flight = flights.find(flight => flight.flightNumber === flightId);

  if (!flight) {
    return <p>Flight not found</p>;
  }

  return (
    <div className="booking-page">
      <h2>Book Your Ticket</h2>
      <div className="flight-details">
        <img src={flight.imageUrl} alt={flight.title} />
        <h3>{flight.title}</h3>
        <p>Flight Name: {flight.flightName}</p>
        <p>{flight.description}</p>
        <p>Price: ${flight.price}</p>
        <p>Departure: {flight.departureDateTime}</p>
        <p>Arrival: {flight.arrivalDateTime}</p>
        <p>Duration: {flight.duration}</p>
        <p>Airline: {flight.airline}</p>
        <p>Flight Number: {flight.flightNumber}</p>
        <p>Seats Available: {flight.seatAvailability}</p>
        
        {/* Booking form can go here */}
        <form>
          <label>Name:
            <input type="text" name="name" required />
          </label>
          <label>Email:
            <input type="email" name="email" required />
          </label>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
