import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { MoralisProvider } from "react-moralis";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <MoralisProvider
      serverUrl="https://tnihscgwmza8.usemoralis.com:2053/server"
      appId="809HtNkIKBLViIOwt3kXC4SI7JJOFaXnw9PMgaLa"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </MoralisProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
