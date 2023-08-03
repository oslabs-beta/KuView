import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Login from '../../src/components/Login';
import Dashboard from '../../src/components/Dashboard';
import Signup from '../../src/components/Signup';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

jest.mock('js-cookie', () => ({
    set: jest.fn(),
}));

describe('Login', () => {
    describe('rendering', () => {
        beforeEach(() => {
            render(<Login />, { wrapper: MemoryRouter })
        });

        it('renders username input field', () => {
            const usernameInput = screen.getByPlaceholderText('Username');
            expect(usernameInput).toBeInTheDocument();
        });

        it('renders password input field', () => {
            const passwordInput = screen.getByPlaceholderText('Password');
            expect(passwordInput).toBeInTheDocument();
        });

        it('renders the login submit button', () => {
            const loginButton = screen.getByRole('button', { name: 'Login' })
            expect(loginButton).toBeInTheDocument();
        })

        it('renders the register button', () => {
            const registerButton = screen.getByRole('button', { name: 'Register' })
            expect(registerButton).toBeInTheDocument();
        })
    })

    describe('login functionality', () => {
        xit('should redirect user to dashboard upon succesful login', async () => {
            const mockSetUser = jest.fn();

            const loginButton = screen.getByRole('button', { name: 'Login' });
            const usernameInput = screen.getByPlaceholderText('Username');
            const passwordInput = screen.getByPlaceholderText('Password');

            // mock the fetch request response
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve({ grafid: 'test1234' }),
                })
            );

            // type in username and password
            await userEvent.type(usernameInput, 'test1234');
            await userEvent.type(passwordInput, 'test1234');

            expect(usernameInput.value).toBe('test1234');
            expect(passwordInput.value).toBe('test1234');

            // click the login button 
            await userEvent.click(loginButton);

            await waitFor(() => {
                const dashboardElement = screen.getByTestId('dashboard-element');
                expect(dashboardElement).toBeInTheDocument();
            })

            expect(mockSetUser).toHaveBeenCalledWith('test1234');
            // Check if the navigation to '/dashboard' has occurred
            expect(screen.getByTestId('dashboard-element')).toBeInTheDocument();
        })


        it('should redirect user to signup if register button is clicked', async () => {
            render(<Login />);

            const registerButton = screen.getByRole('button', { name: 'Register' });
            console.log(registerButton);
            // click the register button
            fireEvent.click(registerButton);

            const signupElement = screen.getByTestId('signup-element');

            expect(signupElement).toBeInTheDocument();
            expect(window.location.pathname).toBe('/signup')
        })
    })


});

