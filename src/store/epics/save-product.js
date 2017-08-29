import {
    SUBMIT_FORM,
    ON_EMPTY_FORM_STATE,
    ON_FORM_SUBMIT_ERROR
} from '../constants';

import { ajax } from 'rxjs/observable/dom/ajax';
import formSavedAction from '../actions/form/form-saved';
import config from '../../config/dev';
import Rx from 'rxjs';

let { params, url } = config.backend.endpoints.form;
let { dialogDelay } = config.ui;

const saveProductEpic = (action$, $store) => action$.ofType(SUBMIT_FORM)
    .mergeMap((data) => Rx.Observable.concat(
        ajax.post(url, data.payload, params).mergeMap(
            (response) => Rx.Observable.of(formSavedAction(response)))
            .catch(err => Rx.Observable.of({ type: ON_FORM_SUBMIT_ERROR, payload: err })),
        Rx.Observable.of({ type: ON_EMPTY_FORM_STATE })
            .delay(dialogDelay)
    ));

export default saveProductEpic;