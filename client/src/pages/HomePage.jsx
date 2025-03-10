import React from 'react';
import { useTheme } from '../context/themeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  const { theme, toggleTheme } = useTheme(); 
  return (
    <>
    <Navbar />
      <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} min-h-screen`}>
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p>The current theme is {theme}.</p>
    </div>
    <Footer/>
    </>
  );
};

export default HomePage;
