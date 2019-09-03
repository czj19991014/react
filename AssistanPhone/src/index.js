import React from "react";
import ReactDOM from "react-dom";
import { useStrict } from 'mobx';
import { Provider } from "mobx-react";
import stores from "./stores";
import App from "./components/App";

useStrict(true);

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById("root")
);
