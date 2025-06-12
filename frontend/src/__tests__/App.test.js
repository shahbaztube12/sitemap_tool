import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders header and footer', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Website Sitemap/i)).toBeInTheDocument();
  expect(screen.getByText(/©2022 SEO Shades copyright all rights reserved./i)).toBeInTheDocument();
});

test('renders home page by default', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});

test('renders 404 page on unknown route', () => {
  render(
    <MemoryRouter initialEntries={['/unknown-route']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/404 - Page Not Found/i)).toBeInTheDocument();
});
