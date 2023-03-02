import axios from 'axios'
import {GET_ALL_FOODS } from './Constantes'

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

