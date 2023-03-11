import {UPDATE_ROLL, POST_USER,ADDSHOPPING, GET_FILTER_FOODS, GET_ALL_FOODS, SEARCH, GET_DETAILS } from '../Actions/Constantes'


const initialState = {
    foods: [],
    allFoods: [],
    shopping: [],
    users:[],
    roll:"client"
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ROLL:
            return {
                ...state,
                roll: [...state.roll, action.payload]
            }
        case POST_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case GET_FILTER_FOODS:
            return {
                ...state,
                foods: action.payload
            }

        case GET_ALL_FOODS:
            return {
                ...state,
                foods: action.payload,
                allFoods: action.payload
            }

        case SEARCH:
            let search = []
            search = state.allFoods?.filter((e) => e.location.toLowerCase().includes(action.payload.toLowerCase()))
            return {
                ...state,
                foods: [...search]
            }
        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
            }
        case ADDSHOPPING:
            return {
                ...state,
                shopping:action.payload
            }
        default:
            return state
    }
}

export default rootReducer