import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// IMPORT COMPONENTS:
import Login from '../../src/components/Login';
import Dashboard from '../../src/components/Dashboard';
import Signup from '../../src/components/Signup';

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
        const mockSetUser = jest.fn();

        beforeEach(() => {
            render(<MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<Login setUser={mockSetUser} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </MemoryRouter>);
        })

        it('should redirect user to dashboard upon succesful login', async () => {
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
                expect(mockSetUser).toHaveBeenCalledWith('test1234');

                const dashboardElement = screen.getByTestId('dashboard-element');
                expect(dashboardElement).toBeInTheDocument();
            })
        })

        it('should redirect user to signup if register button is clicked', async () => {
            const registerButton = screen.getByRole('button', { name: 'Register' });
            // click the register button
            fireEvent.click(registerButton);

            await waitFor(() => {
                const signupElement = screen.getByTestId('signup-element');
                expect(signupElement).toBeInTheDocument();
            })
        })
    })

});

