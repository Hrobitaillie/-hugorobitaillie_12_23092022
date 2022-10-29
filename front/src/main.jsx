import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app';
import { QueryClient, QueryClientProvider } from 'react-query'


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      refetchOnWindowFocus:false,
      refetchOnMount:false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5*60*1000
    }
  }
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);