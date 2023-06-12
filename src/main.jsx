import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProviders from './pages/providers/AuthProviders';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto'>
   <React.StrictMode>
   <AuthProviders>
   <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
     </AuthProviders>
  </React.StrictMode>,
 </div>
)
