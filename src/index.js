import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import { AppContext, AppProvider } from './context'
import { BrowserRouter } from 'react-router-dom'
const root = createRoot(document.getElementById('root'))
root.render(

    <AppProvider>
   <BrowserRouter>
   <App/>
   </BrowserRouter>
    </AppProvider>
    
)