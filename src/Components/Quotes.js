import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=money', {
      headers: {
        'X-Api-Key': 'Q2raRaEu8SFowxGsBjYHlQ==hGwk854gekKZLv2a',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Failed to fetch quote');
      })
      .then((data) => {
        setQuote(data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div id="quotes">
      <p>{quote.quote}</p>
      <p>
        -
        {quote.author}
      </p>
    </div>
  );
};

export default Quotes;
