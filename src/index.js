import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import store from './Redux/store/store'
import { createGlobalStyle } from "styled-components"
import colors from './styles/colors'
import App from './App'
import reportWebVitals from './reportWebVitals'

/**
 * CSS Global styles for the site using styled.components
 */
 const GlobalStyle = createGlobalStyle`
    body {  
      -webkit-font-smoothing: antialiased;
      background-color:${colors.tertiary};
      box-sizing: border-box;
      color: ${colors.secondary};
      font-family: 'Montserrat', 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;
      margin: auto;
      max-width: 1920px;
    } 

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    main {
      min-height: 85vh;
      background: ${colors.primary};
      padding-top: 125px;
    }

    a {
      text-decoration: none;
      color: ${colors.secondary};
      cursor: pointer;  
    }
    
    .sr-only {
      -webkit-clip-path: inset(50%) !important;
      border: 0 !important;
      clip-path: inset(50%) !important; /* 2 */
      clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
      height: 1px !important;
      margin: -1px !important;
      overflow: hidden !important;
      padding: 0 !important;
      position: absolute !important;
      white-space: nowrap !important; /* 3 */
      width: 1px !important;
    }
`;


ReactDOM.render(
  // The Provider must encompass the entire application!
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
