import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../../src/components/Login';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('Login', () => {
    describe('rendering', () => {
        beforeEach(() => {
            render(<Login/>, {wrapper: MemoryRouter})
        });

        it('renders username input field', () => {
            const usernameInput = screen.getByPlaceholderText('Username');
            console.log(usernameInput);

            expect(usernameInput).toBeInTheDocument();
        });

        it('renders password input field', () => {
            const passwordInput = screen.getByPlaceholderText('Password');
            console.log(passwordInput);

            expect(passwordInput).toBeInTheDocument();
        });

        it('renders the login submit button', () => {
            
        })
    })
   

});

