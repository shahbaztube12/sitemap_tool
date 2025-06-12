import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders header and footer and navigates pages', () => {
  render(<App />);
  // Check header logo
  expect(screen.getByText(/Website Sitemap/i)).toBeInTheDocument();

  // Check footer logo
  expect(screen.getByText(/Website Sitemap/i)).toBeInTheDocument();

  // Check initial page is Home
  expect(screen.getByText(/Home/i)).toBeInTheDocument();

  // Navigate to About Us
  fireEvent.click(screen.getByText(/About Us/i));
  expect(screen.getByText(/About Us/i)).toBeInTheDocument();

  // Navigate to Sitemap Tool
  fireEvent.click(screen.getByText(/Sitemap Tool/i));
  expect(screen.getByText(/Sitemap Tool/i)).toBeInTheDocument();
});
