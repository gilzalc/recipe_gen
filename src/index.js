import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { HelmetProvider } from 'react-helmet-async';
ReactDOM.render(
    <React.StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// // Learn more: https://vitejs.dev/guide/api-hmr.html
// if (import.meta.hot) {
//     import.meta.hot.accept();
// }


