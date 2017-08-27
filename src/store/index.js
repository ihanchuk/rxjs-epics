import { combineReducers } from 'redux'
import ProductsReducer from './reducers/products';
import FormReducer from './reducers/form';
import fetchProductsEpic from './epics/fetch-products-epic';
import saveProductEpic from './epics/save-product';

import {
    createStore,
    applyMiddleware
} from 'redux';

import {
    combineEpics,
    createEpicMiddleware
} from 'redux-observable';

const rootEpic = combineEpics(
    fetchProductsEpic,
    saveProductEpic
);

const epicMiddleware = createEpicMiddleware(rootEpic);

const initialState = {
    products: [],
    form: {}
};

//let store = createStore(ProductsReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let reducers = combineReducers({
    products: ProductsReducer,
    form: FormReducer
})

let store = createStore(
    reducers,
    initialState,
    applyMiddleware(epicMiddleware)
);
window.store = store;

export default window.store;