import { 
    PRODUCTS_DISPLAY, 
    ON_PRODUCTS_FETCHED
 } from '../../constants';

const ProductsReducer = (state, action) => {
    switch (action.type) {
        case PRODUCTS_DISPLAY:
            return state.products;
        case ON_PRODUCTS_FETCHED:
            console.log("Products fetched");
            console.table(action.payload);
            break;
        default:
            return state;
    }
}
export default ProductsReducer;