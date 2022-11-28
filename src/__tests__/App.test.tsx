/**
 * @jest-environment jsdom
 */
import { describe, expect, test } from '@jest/globals';
import { queryByTestId, render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import CommentDetail from '../CommentDetail';
import Comments from '../Comments';
import CommentCard from '../CommentCard';
import App from "../App"
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import renderer from 'react-test-renderer';


describe('App test suit', () => {
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

    test('if it renders without crash', async () => { //TODO: it shows the results of loading screen not actual app
        const component = await renderer.create(<BrowserRouter><App /></BrowserRouter>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('progressbar exists', async () => {
        render(<BrowserRouter><App /></BrowserRouter>)
        expect(screen.getByRole("progressbar")).toBeTruthy()
    })

    test('ReactVersion matches package.json', () => {
        const React = require('react');
        const packageJSON = require('react/package.json');
        expect(React.version).toBe(packageJSON.version);
    });
});
