import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders My project link', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/My project/i);
  expect(linkElement).toBeInTheDocument();
});
