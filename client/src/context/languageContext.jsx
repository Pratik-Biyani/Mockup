// src/context/languageContext.js

import React, { createContext, useContext, useState } from 'react';

// Create a context for language
const LanguageContext = createContext();

// Create a custom hook to access the language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Language Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  // Toggle between English and Hindi
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'hi' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
