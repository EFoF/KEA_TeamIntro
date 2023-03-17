import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/custom.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './index.css';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>      
        <App />
      </ThemeProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
