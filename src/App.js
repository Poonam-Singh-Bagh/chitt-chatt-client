import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { io } from "socket.io-client";
import Main from "./component/Main";

const socket = io("http://localhost:3001");

function App() {
  return <Main socket={socket} />;
}

export default App;
