import React from "react";
import { Header } from "./modules/header";
import { TotalAmount } from "./modules/total-amount";
// eslint-disable-next-line no-use-before-define
import socketClient from "socket.io-client";

import "./app.css";
const SERVER = "http://127.0.0.1:8080";

function App() {
  var socket = socketClient(SERVER);
  socket.on("connection", () => {
    console.log(`I'm connected with the back-end`);
  });
  socket.on("updateAmount", (data) => {
    console.log(`Updated Amount ==>`, data);
  });
  return (
    <div className="App">
      <Header />
      <TotalAmount />
    </div>
  );
}

export default App;
