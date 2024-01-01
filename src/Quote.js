// Quote.js
import React from 'react';
import './Quote.css';
const Quote = ({ quote }) => {
    return (
        <div id="demotext"> <p>{quote.text}</p>
            <p>- {quote.author}</p>

        </div>

    );
};

export default Quote;
