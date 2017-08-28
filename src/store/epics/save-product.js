import {
    SUBMIT_FORM,
    ON_EMPTY_FORM_STATE,
    ON_FORM_SUBMIT_ERROR
} from '../constants';

import { ajax } from 'rxjs/observable/dom/ajax';
import formSavedAction from '../actions/form/form-saved';
import Rx from 'rxjs';

const saveProductEpic = (action$, $store) =>
    action$.ofType(SUBMIT_FORM)
        .mergeMap(action => ajax.post( 'http://localhost:9000/products', action.payload,
             {'Content-Type': 'application/json' }))
                .map(response =>formSavedAction(response))
                .catch( err=>{$store.dispatch( {type: ON_FORM_SUBMIT_ERROR})})
                .do( () =>{$store.dispatch( {type: ON_EMPTY_FORM_STATE})})


// const saveProductEpic = (action, store) =>
//     action.ofType(SUBMIT_FORM)
//         .mergeMap((data) =>
//             Rx.concat$(
//                 Rx.Observable.of(store.dispatch('FORM_START_SUBMIT')),
//                 ajax.post('http://localhost:9000/products', action.payload, {'Content-Type': 'application/json' }))
//                     .mergeMap((json) =>{return formSavedAction(json)})
//                             .do( () =>console.log("LOADER:::") )
//                     .catch((error) => Rx.Observable.of(store.dispatch( {type: ON_FORM_SUBMIT_ERROR}))),
//                     Rx.Observable.of(store.dispatch({type: ON_EMPTY_FORM_STATE})),
//             );

export default saveProductEpic;