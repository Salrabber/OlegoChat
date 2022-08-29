import { CREATE_CHAT } from "./types"



const initialState=[]

export default function chatReducer(state = initialState, action){
    switch(action.type){
        case CREATE_CHAT:
            return {...state, state: state.concat(action.payload)}
        default: return state
    }
}