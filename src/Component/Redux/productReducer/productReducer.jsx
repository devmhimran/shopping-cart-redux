import { ADD_TO_CART, FETCH_ERROR, FETCH_START, FETCH_SUCCESS, REMOVE_CART } from "../actionTypes/actionTypes"


export const initialState = {
    loading: false,
    products: [],
    error: false,
    cart: []
}

export const productReducers = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: false
            }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                products: action.payload
            }
        case ADD_TO_CART:
            const selectedProduct = state.cart.find(product => product.id === action.payload.id)
            if (selectedProduct) {
                const newCart = state.cart.filter(product => product.id !== selectedProduct.id)
                selectedProduct.quantity = selectedProduct.quantity + 1
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        case REMOVE_CART:
            const removeSelectedProduct = state.cart.find(product => product.id === action.payload.id)
            if (removeSelectedProduct.quantity > 1) {
                const newCart = state.cart.filter(product => product.id !== removeSelectedProduct.id)
                removeSelectedProduct.quantity = removeSelectedProduct.quantity - 1
                return {
                    ...state,
                    cart: [...newCart, removeSelectedProduct]
                }
            } else {
                return {
                    ...state,
                    cart: state.cart.filter(product => product.id !== action.payload.id)
                }
            }

        default: return state
    }
}