import { SUBMIT_FORM } from '../constants';
import { ajax } from 'rxjs/observable/dom/ajax';
import formSavedAction from '../actions/form/form-saved';
import 'rxjs';

const saveProductEpic = (action$, $store) =>
    action$.ofType(SUBMIT_FORM)
        .mergeMap(action => ajax.post( 'http://localhost:9000/products', action.payload,
             {'Content-Type': 'application/json' }))
                .map(response =>formSavedAction(response) )
                .catch( err=>{
                    $store.dispatch( {type: 'ON_PRODUCTS_FETCH_ERR'})
                });

export default saveProductEpic;