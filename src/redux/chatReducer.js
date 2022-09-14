import { CREATE_MSG } from "./types"

const initialState={
    Frodo: [{value:'Hello there', time: '04:20'}],
    Hodor: [{value:'Hello lad', time: '04:20'},{value:'What the fuck?', time: '04:20'},{value:'No no no no', time: '04:20'},{value:'Bruh...', time: '04:20'}],
    Korvo: [{value:'Hello pal', time: '04:20'}],
    User69: [{value:'Hi fuck', time: '04:20'}]
}


export default function chatReducer(state = initialState, action){
    switch(action.type){
        case CREATE_MSG:
            const chat = action.chat
            return {...state, [chat]: [...state[chat], action.payload]}
        // case SWAP_MSG:
        //     delete state[action.chat]
        //     return {...state, }
        default: return state
    }
}

