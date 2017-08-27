import {
    PRODUCTS_DISPLAY,
    ON_PRODUCTS_FETCHED,
    ON_PRODUCTS_FETCHING,
    ON_PRODUCTS_FETCH_ERROR
} from '../../constants';

const ProductsReducer = (state = [], action) => {
    switch (action.type) {
        case PRODUCTS_DISPLAY:
            return state;
        case ON_PRODUCTS_FETCHING:
            return state;
        case ON_PRODUCTS_FETCH_ERROR:
            console.info("500 ERROR");
            return state;
        case ON_PRODUCTS_FETCHED:
            return [...action.payload]
        //return { products: action.payload }
        default:
            return state;
    }
}
export default ProductsReducer;