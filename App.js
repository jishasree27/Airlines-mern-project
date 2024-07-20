import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

const Header = lazy(() => import('./Pages/Header'));
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const SignUp = lazy(() => import('./Pages/SignUp'));
const Search = lazy(() => import('./Pages/Search'));
const BookingPage = lazy(() => import('./Pages/BookingPage'));

function App() {
  const isAuthenticated = localStorage.getItem('auth') === 'true'; // Ensure auth value is 'true'

  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <div className="app-content">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />  {/* Make sure path is lowercase */}
            <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/signup" />} />
            <Route path="/booking/:flightId" element={<BookingPage />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
