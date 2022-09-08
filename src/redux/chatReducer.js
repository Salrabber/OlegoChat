import { CREATE_MSG } from "./types"



const initialState={
    Frodo: [{value:'Hello there'}],
    Hodor: [{value:'Hello lad'},{value:'What the fuck?'},{value:'No no no no'},{value:'Bruh...'},],
    Korvo: [{value:'Hello pal'}],
    User69: [{value:'Hi fuck'}]
}

export default function chatReducer(state = initialState, action){
    switch(action.type){
        case CREATE_MSG:
            const chat = action.chat
            const newState = state[action.chat].concat(action.payload)
            return {...state, [chat]: [...state[chat], action.payload]}
        default: return state
    }
}