import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './CSS/Login.css';

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './Store/Index.js'
import 'bootstrap/dist/css/bootstrap.min.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    
    <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
