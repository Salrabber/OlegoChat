import React from "react";
import "../styles/messages.scss";
import { useSelector } from "react-redux/es/exports";
import Messsage from "./Message";

export default function Messages({chat}) {
  const messages = useSelector((state) => state.global.chatStore);

  return (
    <>
        {/* <h1>{chat}</h1> */}
      <div className="messageList">
        {messages[chat].map((msg, index) => {
          return(
            <Messsage data={msg} key={index} />
          ) 
        })}
      </div>
    </>
  );
}
