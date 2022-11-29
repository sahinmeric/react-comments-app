/**
 * @jest-environment jsdom
 */
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { describe, expect, test } from '@jest/globals';
import { queryByTestId, render, screen, cleanup, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { renderer, create, act } from 'react-test-renderer';
import NotFound from '../NotFound'; // The component being tested
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 1000 * 60 * 60 * 24,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});

describe('NotFound test suit', () => {
    beforeAll(() => {
        /* Runs before all tests */
    })
    afterAll(() => {
        /* Runs after all tests */
    })
    beforeEach(() => {
        /* Runs before each test */
    })
    afterEach(() => {
        cleanup()
    })

    test("renders", () => {
        let root;
        act(() => {
            root = create(<BrowserRouter><NotFound /></BrowserRouter>)
        });
        // make assertions on root 
        expect(root.toJSON()).toMatchSnapshot();
    })

    test("renders without crash", () => {
        const div = document.createElement("div")
        const root = ReactDOM.createRoot(div);
        root.render(<NotFound />);
    })

    // test('if it renders correctly', () => {
    //     const component = renderer.create(<QueryClientProvider client={queryClient}><Comments /></QueryClientProvider>);
    //     const tree = component.toJSON();
    //     expect(tree).toMatchSnapshot();
    // });

    // test('progressbar exists', () => {
    //     const { getByRole } = render(<QueryClientProvider client={queryClient}><Comments /></QueryClientProvider>);
    //     expect(getByRole).toBeTruthy()
    // });

    // test('Comments header exists', async () => {
    //     render(<QueryClientProvider client={queryClient}><Comments /></QueryClientProvider>);
    //     await waitFor(() => {
    //         screen.getByText("Comments")
    //     })
    // });
});

