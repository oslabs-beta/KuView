import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../src/components/Navbar';
import { Routes, Route } from 'react-router-dom';

describe('Navbar Component', () => {
  it('renders the logo', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navbar setUser={() => {}} />
      </BrowserRouter>
    );
    const logoElement = getByText('KuView');
    expect(logoElement).toBeInTheDocument();
  });

  it('toggles menu when button is clicked', () => {
    const { getByRole, getByTestId } = render(
      <BrowserRouter>
        <Navbar setUser={() => {}} />
      </BrowserRouter>
    );

    const menuToggleButton = getByRole('button', { name: 'Open Menu' });
    const menuElement = getByTestId('menu');

    expect(menuElement).not.toHaveClass('nav__open');

    fireEvent.click(menuToggleButton);

    expect(menuElement).toHaveClass('nav__open');

    fireEvent.click(menuToggleButton);

    expect(menuElement).not.toHaveClass('nav__open');
  });

  it('logs out when logout button is clicked', () => {
    const setUserMock = jest.fn();
    const { getByRole, getAllByRole } = render(
      <BrowserRouter>
        <Navbar setUser={setUserMock} />
      </BrowserRouter>
    );

    const menuToggleButton = getByRole('button', { name: 'Open Menu' });
    fireEvent.click(menuToggleButton);

    const logoutButtons = getAllByRole('button', { name: 'Logout Button' });
    fireEvent.click(logoutButtons[0]);

    expect(setUserMock).toHaveBeenCalledWith('');
  });
});
