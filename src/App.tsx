import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Comments from "./Comments";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 1000 * 60 * 60 * 24, // TODO: Ask Infinity?
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});

const persister = createSyncStoragePersister({
    storage: window.sessionStorage, //till the user closes the tab ends session
});

function App() {

    return (
        // We put ClientProvider at top so every child component will be able to fetch data through QueryClient instance
        <QueryClientProvider client={queryClient}> 
            <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
                <Comments />
                <ReactQueryDevtools initialIsOpen />
            </PersistQueryClientProvider>
        </QueryClientProvider>
    );
}

export default App;
