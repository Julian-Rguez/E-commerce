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
                allCars: action.payload
            }
        case SEARCH:
            let search = []
            search = state.allFoods?.filter((e) => e.location.toLowerCase().includes(action.payload.toLowerCase()))
            return {
                ...state,
                foods: [...search]
            }
        default:
            return state
    }
}

export default rootReducer