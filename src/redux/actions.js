import { CREATE_CHAT } from "./types";

export function createChat(chat){
    return{
        type: CREATE_CHAT,
        payload: chat
    }
}