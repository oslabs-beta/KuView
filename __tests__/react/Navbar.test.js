import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../src/components/Navbar';

describe('Navbar Component', () => {
  it('renders the logo', () => {
    // destructure getByText from the screen object created by render
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const logoElement = getByText('KuView');
    expect(logoElement).toBeInTheDocument();
  });

  it('toggles menu when button is clicked', () => {
    const { getByRole, getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
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
      <MemoryRouter>
        <Navbar setUser={setUserMock} />
      </MemoryRouter>
    );

    const menuToggleButton = getByRole('button', { name: 'Open Menu' });
    fireEvent.click(menuToggleButton);

    // Due to our menu toggle for mobile view, we technically have two logout buttons
    // We specifically select the intended button using the 0th index
    const logoutButtons = getAllByRole('button', { name: 'Logout Button' });
    fireEvent.click(logoutButtons[0]);

    expect(setUserMock).toHaveBeenCalledWith('');
  });
});
