//Eric's test -> Will come back to this later

import React from 'react';
import { render, screen } from '@testing-library/react';

// import components
// import Contact from '../../src/components/Contact';

// Contact testing needs refactoring before running
xdescribe('Contact Component', () => {
  describe('rendering', () => {
    beforeAll(() => {
      render(<Contact />)
    });

    it('renders header', () => {
      const header = screen.getByText('The Team');
      expect(header).toBeInTheDocument();
    });

    it('renders image', () => {
        
    })


  });
});

