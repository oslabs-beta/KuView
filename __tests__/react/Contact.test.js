import React from 'react';
import { render, screen } from '@testing-library/react';

// import components
import Contact from '../../src/components/Contact';

describe('Contact', () => {
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

