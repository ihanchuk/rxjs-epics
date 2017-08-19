const ProductsReducer = (state, action) => {
    switch (action.type) {
        case 'DISPLAY_PRODUCTS':
            return state.products;
        case 'SET_MESSAGE':
            return { ...state, message:{display:true, messageText:action.payload.messageText} }
        case 'HIDE_MESSAGES':
            return {...state, message:{display:false, messageText: ''}}
        default:
            return state;
    }
}
export default ProductsReducer;