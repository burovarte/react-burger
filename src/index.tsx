import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from "./components/app/app";
import reportWebVitals from './reportWebVitals';
import {store} from './services/store';
import {Provider} from 'react-redux'
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById('root');
const asd = createRoot(container!); // createRoot(container!) if you use TypeScript
asd.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>);

// ReactDOM.render(<App />, document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
