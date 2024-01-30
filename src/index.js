import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//contexts
import { App_provider } from './context/Productcontext';
import { CartProvider } from './context/cart_context';
import { FilterProvider } from './context/filter_context';
import { UserProvider } from './context/user_context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>   
    <UserProvider>
    <App_provider>
        <FilterProvider>
        <CartProvider>
    <App />
    </CartProvider> 
    </FilterProvider>
    </App_provider>
    </UserProvider>

    </>
);


reportWebVitals();
