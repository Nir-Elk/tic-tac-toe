import React from "react";
import ReactDOM from "react-dom";
import Board from "./Components/Board";

const App = () => {
    return (
        <>
            <Board/>
        </>
    );
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);