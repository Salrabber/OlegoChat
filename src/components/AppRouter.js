import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";

export default function AppRouter() {
  const user = false;

  return (
    
    user ? <>
    <Link className="btn btn-success" to="/chat">Open chat</Link>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes></> : 
      <><Link className="btn btn-primary" to="/login">Login</Link>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      </>
   
  );
}
