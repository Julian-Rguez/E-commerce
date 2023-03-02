import axios from 'axios'
import { GET_ALL_FOODS, GET_FILTER_FOODS, SEARCH, GET_DETAILS } from './Constantes'

export const getAllFoods = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:3001/foods')
        dispatch({
            type: GET_ALL_FOODS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getfilterFoods = (payload) => {
    return {
        type: GET_FILTER_FOODS,
        payload
    }
}
export function getDetail(id) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`http://localhost:3001/foods/${id}`)
            return dispatch({
                type: GET_DETAILS,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const setSearch = (payload) => {
    return {
        type: SEARCH,
        payload
    }
}