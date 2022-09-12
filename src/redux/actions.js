import { CREATE_MSG, SWAP_MSG } from "./types";

export function createMessage(chat, msg){
    return{
        type: CREATE_MSG,
        payload: msg,
        chat: chat
    }
}

export function swapMessage(chat){
    return{
        type: SWAP_MSG,
        chat: chat
    }
}