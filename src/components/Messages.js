import React from "react";
import "../styles/messages.scss";
import { useSelector } from "react-redux/es/exports";

export default function Messages({chat}) {
  const messages = useSelector((state) => state.global.chatStore);
  console.log(messages);
  console.log(chat)

  return (
    <>
        <h1>{chat}</h1>
      <div className="messageList">
        {messages[chat].map((msg, index) => {
          return <p key={index}>{msg.value}</p>;
        })}
      </div>
    </>
  );
}
