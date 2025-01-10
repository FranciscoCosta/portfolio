import React, { createContext, useState, useContext } from 'react';

// Create a Language Context
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'pt' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook to use the Language Context
export const useLanguage = () => useContext(LanguageContext);