//Eric's test -> Will come back to this later

import React from 'react';
import { render, screen } from '@testing-library/react';

// import components
import Contact from '../../src/components/Contact';

xdescribe('Contact', () => {
    xdescribe('rendering', () => {
        beforeAll(() => {
            render(<Contact />)
        });

        xit('renders header', () => {
            const header = screen.getByText('The Team');
            expect(header).toBeInTheDocument();
        });

        xit('renders image', () => {
            
        })


    });
});

