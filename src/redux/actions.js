import { CREATE_MSG } from "./types";

export function createMessage(chat, msg){
    return{
        type: CREATE_MSG,
        payload: msg,
        chat: chat
    }
}