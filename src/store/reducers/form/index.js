import {
    SUBMIT_FORM,
    ON_FORM_SUBMITED
} from '../../constants';

const FormReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_FORM:
            return  state;
        default:
            return state;
    }
}
export default FormReducer;