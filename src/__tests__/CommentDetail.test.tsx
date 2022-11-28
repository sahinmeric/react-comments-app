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


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 1000 * 60 * 60 * 24,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});

describe('CommentDetail test suit', () => {
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
        const component = renderer.create(<BrowserRouter><QueryClientProvider client={queryClient}><CommentDetail /></QueryClientProvider></BrowserRouter>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    // test('should render a button with the class of primary', () => {
    //     render(<CommentDetail />)
    // })
    // test('should render a button with the class of primary', () => {
    //     render(<CommentCard commentId={1}
    //         id={2}
    //         name={"asdasda"}
    //         email={"email"}
    //         body={"this is comentario"}/>)
    // })

});

