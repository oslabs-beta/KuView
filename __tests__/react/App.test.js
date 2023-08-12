import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../src/components/App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

describe('App', () => {
  describe('Rendering', () => {
    it('renders the app component', () => {
      const { getByTestId } = render(<App />, { wrapper: BrowserRouter });
      const appComponent = getByTestId('app-element');
      expect(appComponent).toBeInTheDocument();
    });
  
    it('renders the Navbar component', () => {
      render(<App />, { wrapper: BrowserRouter });
      const navbarElement = screen.getByTestId('navbar-element');
      expect(navbarElement).toBeInTheDocument();
    });
  
    
    it('renders the Login component when the route is /login', () => {
      render(
        <MemoryRouter initialEntries={['/login']}>
          <App />
        </MemoryRouter>,
      );
      const loginElement = screen.getByTestId('login-element');
      expect(loginElement).toBeInTheDocument();
    });
  
    it('renders the Login component when the route is /', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>,
      );
      const loginElement = screen.getByTestId('login-element');
      expect(loginElement).toBeInTheDocument();
    });
  
    it('renders the Signup component when the route is /signup', () => {
      render(
        <MemoryRouter initialEntries={['/signup']}>
          <App />
        </MemoryRouter>,
      );
      const signupElement = screen.getByTestId('signup-element');
      expect(signupElement).toBeInTheDocument();
    });
  });

  describe('Authentication - Cookies', () => {
    beforeEach(() => {
      // Clear the cookie before each test
      Cookies.remove('grafid');
    });

    it('renders Dashboard when the route is /dashboard and cookie present', () => {
      Cookies.set('grafid', 'random1234', { expires: 1 });

      render(
        <MemoryRouter initialEntries={['/dashboard']}>
          <App />
        </MemoryRouter>,
      );
      const dashboardElement = screen.getByTestId('dashboard-element');
      expect(dashboardElement).toBeInTheDocument();
    })

    it('does not render Dashboard component when cookie is not present', () => {
      render(
        <MemoryRouter initialEntries={['/dashboard']}>
          <App />
        </MemoryRouter>,
      );

      const dashboardElement = screen.queryByTestId('dashboard-element');
      expect(dashboardElement).not.toBeInTheDocument();
    })
  })


});
