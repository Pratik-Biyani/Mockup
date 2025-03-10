// src/pages/AboutUsPage.js

import React from 'react';
import { useTheme } from '../context/themeContext';
import { useLanguage } from '../context/languageContext'; // Import the language context

const AboutUsPage = () => {
  const { theme } = useTheme(); // Access theme from context
  const { language, toggleLanguage } = useLanguage(); // Access language and toggle function from language context

  // Define the content in both languages
  const content = {
    en: {
      title: 'About Us',
      description: 'The current theme is',
      languageToggle: 'Switch to Hindi',
    },
    hi: {
      title: 'हमारे बारे में',
      description: 'वर्तमान थीम है',
      languageToggle: 'हिंदी में बदलें',
    },
  };

  return (
    <>
      <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} min-h-screen p-6`}>
      <h1 className="text-4xl font-bold">{content[language].title}</h1>
      <p className="mt-4">{content[language].description} {theme}.</p>

      {/* Language Toggle Button */}
      <button
        onClick={toggleLanguage}
        className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all duration-200"
      >
        {content[language].languageToggle}
      </button>
    </div>
    </>
  );
};

export default AboutUsPage;
