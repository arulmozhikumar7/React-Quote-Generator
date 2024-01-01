// App.js
import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import Button from './Button';
import './App.css'; // Import the CSS file

const App = () => {
  const [quote, setQuote] = useState({});

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote({ text: data.content, author: data.author });
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container">
      <h1>Random Quote Generator</h1>
      <Quote quote={quote} />
      <Button onClick={fetchQuote} label="Generate Quote" />
    </div>
  );
};

export default App;
