import { 
    PRODUCTS_DISPLAY,
    ON_PRODUCTS_FETCHING,
    ON_PRODUCTS_FETCH_ERROR
    } from '../constants';

import { ajax } from 'rxjs/observable/dom/ajax';
import { productsFetchedAction }
    from '../actions/products/products-fetched-action';
import 'rxjs';

const fetchProductsEpic = (action$, $store) =>
    action$.ofType(PRODUCTS_DISPLAY)
        .do($store.dispatch({type: ON_PRODUCTS_FETCHING}))
        .mergeMap(action => ajax.getJSON(`http://localhost:9000/products`)
            .map(response => productsFetchedAction(response))
            .catch( err=>{
                $store.dispatch( {type: ON_PRODUCTS_FETCH_ERROR})
            })
        );

export default fetchProductsEpic;