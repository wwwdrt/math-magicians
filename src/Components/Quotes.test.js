import React from 'react';
import { render, act } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import Quotes from './Quotes';

fetchMock.enableMocks();

describe('Quotes', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('fetches quotes from the API', async () => {
    fetch.mockResponseOnce(JSON.stringify([
      {
        quote: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
        author: 'Ayn Rand',
      },
    ]));

    await act(async () => {
      render(<Quotes />);
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://api.api-ninjas.com/v1/quotes?category=money', {
      headers: {
        'X-Api-Key': 'Q2raRaEu8SFowxGsBjYHlQ==hGwk854gekKZLv2a',
      },
    });
  });
});
