import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes } from "react-router-dom";
//components
import Comments from "./Comments";
import CommentDetail from './CommentDetail';
import NotFound from './NotFound';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 1000 * 60 * 60 * 24,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path='/' element={<Comments />} />
                <Route path='/:commentId' element={<CommentDetail />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
    );
}

export default App;
