import * as types from '../constants/ActionType'
import * as msg from '../constants/Message'

let initalState = msg.MSG_WELCOME

const message = (state = initalState, action)=>{

    switch(action.type){
        case types.CHANGE_MESSAGE:
            return action.message
        default: return [...state]
    }
}

export default message