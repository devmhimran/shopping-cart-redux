import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS} from "../actionTypes/actionTypes"


export const initialState = {
    loading: false,
    products: [],
    error: false,
    cart: []
}

export const productReducers = (state= initialState, action) => {
    // console.log(action)
    switch(action.type){
        case FETCH_START:
            return{
                ...state,
                loading: true,
                error: false
            }
        case FETCH_ERROR:
            return{
                ...state,
                loading: false,
                error: true
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,
                products: action.payload
            }
            default: return state
    }
}