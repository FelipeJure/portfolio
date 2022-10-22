import { LANGUAGE, COLOR } from './actions';

const initialState = {
    language: 'english',
    color: 'light'
}

export default function rootReducer (state = initialState, action){
    switch (action.type) {
        case LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        case COLOR:
            return {
                ...state,
                color: action.payload
            }
        default :
            return state
    }
}