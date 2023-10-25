import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Test from '../../src/components/Test';

test('renders a name', () => {
  render(<Test name='jack' />);
  const linkElement = screen.getByText(/Name is Jack/i);
  expect(linkElement).toBeInTheDocument();
});
