import React from 'react';
import { render, screen } from '@testing-library/react';
import { Product } from '../product.jsx';

test('renders a name', () => {
  render(<Product name="Zoho Desk" />);
  const divElement = screen.getByRole('contentinfo');
  expect(divElement).toHaveTextContent('Name is Zoho Desk');
  expect(divElement).toHaveAttribute('role', 'contentinfo');
});
