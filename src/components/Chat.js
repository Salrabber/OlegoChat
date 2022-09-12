import React from "react";
import "../styles/chat.scss";
import Contact from "./contact";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Messages from "./Messages";
import { useState } from "react";
import { createMessage } from "../redux/actions";

export default function Chat() {
  const [value, setValue] = useState("");
  const [active, setActive] = useState("Hodor");

  const dispatch = useDispatch();

  const chats = useSelector((state) => state.global.chatStore);

  let data = [];
  let id = 0;
  for (let key in chats) {
    data = data.concat({ name: key, message: chats[key][0].value, id: id });
    id++;
  }

  const submitHandler = (event) => {
    setValue(event.target.value);
  };

  const sendMessage = async (event) => {
    const currentDate = new Date().toLocaleString().split(", ");
    const date = currentDate[0];
    const time = currentDate[1];
    event.preventDefault();
    dispatch(
      createMessage(active, {
        user: "User",
        value: value,
        time: time,
        date: date,
      })
    );
    setValue("");
    fetch("https://api.chucknorris.io/jokes/random")
      .then((msg) => msg.json())
      .then(
        (msg) => {
          dispatch(
            createMessage(active, {
              user: "chatBot",
              value: msg.value,
              time: time,
              date: date,
            })
          );
        }
        // setTimeout(() => {
        //   dispatch(
        //     createMessage(active, {
        //       user: "chatBot",
        //       value: msg.value,
        //       time: time,
        //       date: date,
        //     })
        //   );
        // }, 2000)
      );
  };

  const activeChat = (name) => {
    setActive(name);
  };

  return (
    <div className="chat__inner">
      <div className="chats">
        {data.map((chat, index) => {
          return (
            <div
              className="contact"
              onClick={() => activeChat(chat.name)}
              key={index}
            >
              <Contact
                data={{ name: chat.name, message: chat.message, selected: active }}
                key={index}
              />
            </div>
          );
        })}
      </div>
      <div className="messages">
        <h1>{active}</h1>
        <div className="list card">
          <Messages chat={active} />
        </div>
        <form onSubmit={sendMessage} className="sendForm">
          <input
            onChange={submitHandler}
            value={value}
            type="text"
            className="typeMsgInput form-control"
          ></input>
          <button onClick={sendMessage} className="sendMsgBtn btn btn-info">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
