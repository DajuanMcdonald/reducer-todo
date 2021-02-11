import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn about reducers', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Learn about reducers/i);
  expect(linkElement).toBeInTheDocument();
});
