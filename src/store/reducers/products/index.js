const ProductsReducer = (state, action) => {
    switch (action.type) {
        case 'DISPLAY_PRODUCTS':
            return state.products;
        case 'SET_MESSAGE':
            let message = {
                display: true,
                messageText: 'Hello dude!'
            };
            return { ...state, message }
        case 'HIDE_MESSAGES':
            let closedMessage = {
                display: false,
                messageText: ''
            };
            return { ...state, closedMessage }
        default:
            return state;
    }
}
export default ProductsReducer;