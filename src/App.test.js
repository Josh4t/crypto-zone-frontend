import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders Crypto Zone', () => {
  render(<App />);
  const linkElement = screen.getByText(/crypto zone/i);
  expect(linkElement).toBeInTheDocument();
});
