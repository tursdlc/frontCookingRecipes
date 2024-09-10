import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';
import RecipesPage from '../pages/recipesPage/recipesPage.jsx'
import '@testing-library/jest-dom/extend-expect';

// Mocking Axios
const mockAxios = new axiosMock(axios);

describe('RecipesPage', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('fetches and displays recipes correctly', async () => {
        // Mock the API response
        const mockData = [
            { id: 1, title: 'Recipe 1', description: 'Desc 1', time: '30' },
            { id: 2, title: 'Recipe 2', description: 'Desc 2', time: '45' }
        ];

        mockAxios.onGet('url').reply(200, mockData);  

        // Render the component
        render(<RecipesPage />);

        // Test loading state if you implement it (e.g., a loading spinner)
        // expect(screen.getByText(/loading/i)).toBeInTheDocument();

        // Wait for the data to appear in the DOM
        await waitFor(() => expect(screen.getByText('Recipe 1')).toBeInTheDocument());
        await waitFor(() => expect(screen.getByText('Recipe 2')).toBeInTheDocument());
        
        // Check the details of the first recipe
        expect(screen.getByText('Recipe 1')).toBeInTheDocument();
        expect(screen.getByText('Desc 1')).toBeInTheDocument();
        expect(screen.getByText('30 min')).toBeInTheDocument();
    });

    it('handles API errors gracefully', async () => {
        // Mock an error response
        mockAxios.onGet('url').reply(500);

        // Spy on console.log to check if the error is logged
        const consoleSpy = jest.spyOn(console, 'log');

        render(<RecipesPage />);

        await waitFor(() => expect(consoleSpy).toHaveBeenCalled());
        expect(consoleSpy).toHaveBeenCalledWith(expect.anything());
    });
});