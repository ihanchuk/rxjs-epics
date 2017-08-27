import {
    SUBMIT_FORM,
    ON_FORM_SUBMITED
} from '../../constants';

const FormReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_FORM:
            return { action: 'Saving form', error: null, message: 'Sending data to server' }
            return state;
        default:
            return state;
    }
}
export default FormReducer;