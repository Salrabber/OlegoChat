import React from "react";
import "../styles/chat.scss";
import Contact from "./contact";
import { useSelector } from "react-redux/es/exports";



export default function Chat() {

    const chats = useSelector(state => state.global.chatStore)
    let data = []
    let id = 0
    for (let key in chats){
        data = data.concat({name: key, message: chats[key][0].value, id: id })
        id++
    }
  return (
    <div className="chat__inner">
      <div className="chats">
       {data.map((chat,index) => {
        return(
           <Contact data={{name: chat.name, message: chat.message}} key={index} />
        )
       })}
      </div>
      <div className="messages"></div>
    </div>
  );
}
