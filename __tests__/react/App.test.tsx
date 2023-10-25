import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../src/components/App';
import { MemoryRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

describe('App Component', () => {
  describe('Rendering', () => {
    it('renders the app component', () => {
      // destructure getByTestId from the screen object created by render
      // wrapper is just shorthand for wrapping the App component within the MemoryRouter component
      const { getByTestId } = render(<App />, { wrapper: MemoryRouter });
      // grab the HTML element by data-testid and store it in JS variable
      const appComponent = getByTestId('app-element');
      // check document for presence of JS variable
      expect(appComponent).toBeInTheDocument();
    });

    it('renders the Navbar component', () => {
      // see logic above
      render(<App />, { wrapper: MemoryRouter });
      // Similar to logic above, but not destructuring getByTestId from the screen object here
      const navbarElement = screen.getByTestId('navbar-element');
      expect(navbarElement).toBeInTheDocument();
    });

    it('renders the Login component when the route is /login', () => {
      render(
        // testing the route provided in the initialEntries prop
        <MemoryRouter initialEntries={['/login']}>
          <App />
        </MemoryRouter>
      );
      const loginElement = screen.getByTestId('login-element');
      expect(loginElement).toBeInTheDocument();
    });

    it('renders the Login component when the route is /', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      const loginElement = screen.getByTestId('login-element');
      expect(loginElement).toBeInTheDocument();
    });

    it('renders the Signup component when the route is /signup', () => {
      render(
        <MemoryRouter initialEntries={['/signup']}>
          <App />
        </MemoryRouter>
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
        </MemoryRouter>
      );
      const dashboardElement = screen.getByTestId('dashboard-element');
      expect(dashboardElement).toBeInTheDocument();
    });

    it('does not render Dashboard component when cookie is not present', () => {
      render(
        <MemoryRouter initialEntries={['/dashboard']}>
          <App />
        </MemoryRouter>
      );

      const dashboardElement = screen.queryByTestId('dashboard-element');
      // in this case, without a cookie, the dashboard should not render, hence 'not' seen below
      expect(dashboardElement).not.toBeInTheDocument();
    });
  });
});
