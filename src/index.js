import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Hola mundo sin JSX
const root = document.getElementById("root");

//const elemento = React.createElement(componente, propiedades, hijos);
//const elemento = React.createElement("h1", {className: "saludo"}, "Hola Mundo");

// Hola mundo con JSX

//ReactDOM.render(<h1 className='saludos'>Hola Mundo</h1>, root);

ReactDOM.render(<App />, root);
