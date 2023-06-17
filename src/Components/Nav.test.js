import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';

describe('Nav', () => {
  test('renders Nav component', () => {
    const { container } = render(<Router><Nav /></Router>);

    const heading = container.querySelector('h1');
    expect(heading.textContent).toBe('Math Magicians');

    const navLinks = container.querySelectorAll('a');
    expect([...navLinks].map(link => link.textContent)).toEqual([
      'Home',
      'Calculator',
      'Quotes',
    ]);
  });
});
