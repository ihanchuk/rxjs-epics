import { createStore, applyMiddleware } from 'redux';
import ProductsReducer from './reducers/products';
import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
//import 'rxjs/add/operator/mergeMap';
import { combineEpics,  createEpicMiddleware } 
    from 'redux-observable';
import {PRODUCTS_DISPLAY, ON_PRODUCTS_FETCHED} 
    from './constants';


const fetchProductsFulfilled = payload => ({ type: ON_PRODUCTS_FETCHED, payload });

const fetchProductsEpic = action$ =>
    action$.ofType(PRODUCTS_DISPLAY)
        .mergeMap(action =>
            ajax.getJSON(`http://localhost:9000/products`)
                .map(response => fetchProductsFulfilled(response))
        );

const rootEpic = combineEpics(
    fetchProductsEpic
);

const epicMiddleware = createEpicMiddleware(rootEpic);

const initialState = {
    products: [
        { name: 'Iphone', price: '200', color: 'Green' }
    ],
    message: {
        display: false,
        messageText: 'hello'
    }
};

//let store = createStore(ProductsReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let store = createStore(
    ProductsReducer, 
    initialState, 
    applyMiddleware(epicMiddleware)
    );
window.store = store;

export default window.store;