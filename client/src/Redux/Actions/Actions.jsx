import axios from 'axios'
import { SEARCH, GET_ALL_FOODS, GET_DETAILS } from './Constantes'

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