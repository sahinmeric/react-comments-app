/**
 * @jest-environment jsdom
 */
import { describe, expect, test } from '@jest/globals';
import { queryByTestId, render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Comments from '../Comments';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import renderer from 'react-test-renderer';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 1000 * 60 * 60 * 24,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});

describe('Comments test suit', () => {
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
        /* Runs after each test */
    })

    test('if it renders without crash', () => {
        const component = renderer.create(<QueryClientProvider client={queryClient}><Comments /></QueryClientProvider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

