import { SEARCH, GET_ALL_FOODS, GET_DETAILS } from '../Actions/Constantes'


const initialState = {
    foods: [],
    allFoods: [],
    details: [],
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_FOODS:
            return {
                ...state,
                foods: action.payload,
                allCars: action.payload
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
        default:
            return state
    }
}

export default rootReducer