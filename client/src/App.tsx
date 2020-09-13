import React from "react";
import logo from "./logo.svg";
import "./App.css";
import initiateConnection from "./initiate-connection";
import recieveConnection from "./recieve-connection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn RTS
        </a>
        <button onClick={initiateConnection}>SendOffer</button>
        <button onClick={recieveConnection}>GetOffer</button>
      </header>
    </div>
  );
}

export default App;
