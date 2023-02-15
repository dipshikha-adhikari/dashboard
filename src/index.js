import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context'
const root = createRoot(document.getElementById('root'))
root.render(
<AppProvider>
<BrowserRouter>
   <App/>
   </BrowserRouter>
</AppProvider>
)