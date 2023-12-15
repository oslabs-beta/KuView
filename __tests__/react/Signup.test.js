import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// IMPORT COMPONENTS:
import Login from '../../src/components/Login';
import Signup from '../../src/components/Signup';

describe('Signup Component', () => {
  describe('rendering', () => {
    beforeEach(() => {
      render(<Signup />, { wrapper: MemoryRouter })
    });

    it('renders username input field', () => {
      const usernameInput = screen.getByPlaceholderText('Username');
      expect(usernameInput).toBeInTheDocument();
    });

    it('renders password input field', () => {
      const passwordInput = screen.getByPlaceholderText('Password');
      expect(passwordInput).toBeInTheDocument();
    });

    it('renders email input field', () => {
      const emailInput = screen.getByPlaceholderText('Email');
      expect(emailInput).toBeInTheDocument();
    });

    it('renders the signup submit button', () => {
      const signupButton = screen.getByRole('button', { name: 'Sign up' })
      expect(signupButton).toBeInTheDocument();
    })

    it('renders the login link button', () => {
      const loginButton = screen.getByRole('button', { name: 'Login' })
      expect(loginButton).toBeInTheDocument();
    })
  })

  describe('signup functionality', () => {
    beforeEach(() => {
      render(<MemoryRouter initialEntries={['/signup']}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </MemoryRouter>);

      // mock the fetch request response
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
        })
      );
    })

    it('should show confirmation message upon successful signup and redirect to login', async () => {
      const usernameInput = screen.getByPlaceholderText('Username');
      const emailInput = screen.getByPlaceholderText('Email');
      const passwordInput = screen.getByPlaceholderText('Password');
      const signupButton = screen.getByRole('button', { name: 'Sign up' });

      // Set input values using userEvent.type
      await userEvent.type(usernameInput, 'testuser');
      await userEvent.type(emailInput, 'test@example.com');
      await userEvent.type(passwordInput, 'testpassword');

      // Click the signup button
      await userEvent.click(signupButton);

      // sign up confirmation
      const confirmationMessage = await screen.findByText('Sign up confirmed! ✅');
      expect(confirmationMessage).toBeInTheDocument();

      // redirecting to login check
      await waitFor(() => {
        const loginElement = screen.getByTestId('login-element');
        expect(loginElement).toBeInTheDocument();
      })
    })

    it('should redirect user to login if login button is clicked', async () => {
      const loginButton = screen.getByRole('button', { name: 'Login' });
      // click the register button
      fireEvent.click(loginButton);

      await waitFor(() => {
        const loginElement = screen.getByTestId('login-element');
        expect(loginElement).toBeInTheDocument();
      })
    })
  })
})