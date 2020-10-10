import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('I was changed on the feature branch', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/changed on/i);
  expect(linkElement).toBeInTheDocument();
});