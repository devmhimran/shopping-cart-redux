import { FETCH_SUCCESS } from "../actionTypes/actionTypes"

export const fetchData = (data) =>{
    return {
        type: FETCH_SUCCESS,
        payload: data
    }
}
