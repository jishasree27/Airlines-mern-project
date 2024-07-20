import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';

function Home() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [filteredFlights, setFilteredFlights] = useState([]);

  // Updated flight data with specified routes
  const flights = [
    {
      imageUrl: 'https://i.pinimg.com/236x/59/41/65/5941653a31c308f10cca6ab055c7d488.jpg',
      flightName: 'AirIndia',
      title: 'Flight from Coimbatore to Chennai',
      description: 'Enjoy a comfortable flight from Coimbatore to Chennai.',
      price: '150',
      departureDateTime: '2024-08-01 08:00',
      arrivalDateTime: '2024-08-01 09:30',
      duration: '1h 30m',
      airline: 'Airline A',
      flightNumber: 'AA123',
      seatAvailability: '20'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/92/1c/c9/921cc94381edd35a7458004c3a072987.jpg',
      flightName: 'Indigo',
      title: 'Flight from Chennai to Bangalore',
      description: 'Fly from Chennai to Bangalore with our premium services.',
      price: '120',
      departureDateTime: '2024-08-02 10:00',
      arrivalDateTime: '2024-08-02 11:30',
      duration: '1h 30m',
      airline: 'Airline B',
      flightNumber: 'BB456',
      seatAvailability: '15'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/ce/36/7c/ce367cada20c6b58f15463a0e3bb1893.jpg',
      flightName: 'SpiceJet',
      title: 'Flight from Chennai to Delhi',
      description: 'Enjoy a comfortable flight from Chennai to Delhi.',
      price: '300',
      departureDateTime: '2024-08-03 07:00',
      arrivalDateTime: '2024-08-03 10:00',
      duration: '3h 00m',
      airline: 'Airline C',
      flightNumber: 'CC789',
      seatAvailability: '25'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/26/29/a0/2629a09d12cfbf374f615c2aef3a54f6.jpg',
      flightName: 'Go First',
      title: 'Flight from Coimbatore to Cochin',
      description: 'Fly from Coimbatore to Cochin and enjoy the scenery.',
      price: '100',
      departureDateTime: '2024-08-04 06:00',
      arrivalDateTime: '2024-08-04 07:00',
      duration: '1h 00m',
      airline: 'Airline D',
      flightNumber: 'DD101',
      seatAvailability: '30'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/ad/c7/d7/adc7d75c8d38ca3e94956856aac9c79c.jpg',
      flightName: 'Vistara',
      title: 'Flight from Coimbatore to Chennai',
      description: 'Enjoy a comfortable flight from Coimbatore to Chennai.',
      price: '140',
      departureDateTime: '2024-08-05 09:00',
      arrivalDateTime: '2024-08-05 10:30',
      duration: '1h 30m',
      airline: 'Airline E',
      flightNumber: 'EE202',
      seatAvailability: '18'
    },
  ];

  const handleSearch = () => {
    const results = flights.filter(flight => {
      const matchesFrom = from ? flight.title.includes(from) : true;
      const matchesTo = to ? flight.title.includes(to) : true;
      return matchesFrom && matchesTo;
    });
    setFilteredFlights(results);
  };

  return (
    <div className="home">
      <h2>Book a Flight</h2>
      <div className="search-form">
        <input
          type="text"
          placeholder="From (Starting with UpperCase)"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="text"
          placeholder="To (Starting with UpperCase)"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <button onClick={handleSearch}>Search Flights</button>
      </div>

      <div className="flight-results">
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight, index) => (
            <div key={index} className="flight-card">
              <img src={flight.imageUrl} alt={flight.title} />
              <div className="flight-card-content">
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
                <Link to={`/booking/${flight.flightNumber}`}>
                  <button className="book-button">Book Ticket</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No flights found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
