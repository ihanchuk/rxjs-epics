import {
    PRODUCTS_DISPLAY,
    ON_PRODUCTS_FETCHING,
    ON_PRODUCTS_FETCH_ERROR
} from '../constants';

import { ajax } from 'rxjs/observable/dom/ajax';
import { productsFetchedAction } from '../actions/products/products-fetched-action';
import config from '../../config/dev';
import Rx from 'rxjs';

let { url } = config.backend.endpoints.products;

const fetchProductsEpic = (action$, $store) => action$.ofType(PRODUCTS_DISPLAY)
    .mergeMap((data) => Rx.Observable.concat(
        Rx.Observable.of({ type: ON_PRODUCTS_FETCHING }),
        ajax.getJSON(url)
            .map(response => productsFetchedAction(response))
            .catch(err => Rx.Observable.of({ type: ON_PRODUCTS_FETCH_ERROR, payload: err })),
    ));

export default fetchProductsEpic;