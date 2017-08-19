import { createStore } from 'redux';
import ProductsReducer from './reducers/products';

const initialState = {
    products: [
        {name: 'Iphone', price: '200', color: 'Green'}
    ],
    message: {
        display: false,
        messageText: 'hello'
    }
};

let store = createStore(ProductsReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;

export default window.store;