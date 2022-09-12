import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login";
import Chat from "./components/Chat";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { createMessage } from "./redux/actions";
import matchers from "@testing-library/jest-dom/matchers";

function App() {
  let [user, setUser] = React.useState(false);
  const dispatch = useDispatch();
  const sendMsg = () => {
    dispatch(createMessage("Hodor", "Hello there"));
  };
  const changeUser = () => {
    setUser(!user);
  };



  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          {user ? (
            <>
              <Link className="btn btn-success" to="/chat">
                Open chat
              </Link>
              <h1>Welcome to App-chat</h1>
              <Link className="btn btn-danger" to="/">
                Log out
              </Link>
            </>
          ) : (
            <>
              <Link className="btn btn-success" to="/chat">
                Open chat
              </Link>
              <h1>Welcome to App-chat</h1>
              <Link className="btn btn-primary" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
      <div className="container">
        <div className="wrapper">
          <button onClick={changeUser} className="btn btn-info">
            Hello, Hodor!
          </button>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
