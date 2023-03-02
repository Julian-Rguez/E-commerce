import { SEARCH, GET_ALL_FOODS } from '../Actions/Constantes'


const initialState = {
    foods: [],
    allFoods: [],
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_FOODS:
            return {
                ...state,
                foods: action.payload,
                allFoods: action.payload
            }
        default:
            return state
    }
}

export default rootReducer