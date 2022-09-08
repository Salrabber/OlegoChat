import React from "react";
import "../styles/chat.scss";
import Contact from "./contact";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Messages from "./Messages";
import { useState } from "react";
import { createMessage } from "../redux/actions";


export default function Chat() {

  const [value, setValue] = useState('')
  const [active, setActive] = useState('Hodor')

  const dispatch = useDispatch()

    const chats = useSelector(state => state.global.chatStore)
    let data = []
    let id = 0
    for (let key in chats){
        data = data.concat({name: key, message: chats[key][0].value, id: id })
        id++
    }

    const submitHandler = (event) => {
      setValue(event.target.value)
    }
    
    const sendMessage = (event) => {
      event.preventDefault()
      dispatch(createMessage('Hodor', {value: value}))
      setValue('')
    }

    const activeChat = (name) =>{
      setActive(name)
    }

  return (
    <div className="chat__inner">
      <div className="chats">
       {data.map((chat,index) => {
        return(
           <Contact className="contact" onClick={console.log('fuck')} data={{name: chat.name, message: chat.message}} key={index} />
        )
       })}
      </div>
      <div className="messages">
        <div className="list">
          <Messages chat={active} />
        </div>
        <form onSubmit={sendMessage} className="sendForm">
          <input onChange={submitHandler} value={value} type='text' className="typeMsgInput"></input>
          <button onClick={sendMessage} className="sendMsgBtn">Send</button>
        </form>
      </div>
    </div>
  );
}
