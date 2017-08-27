import {
    SUBMIT_FORM,
    ON_FORM_SUBMITED,
    ON_FORM_SUBMIT_ERROR,
    ON_EMPTY_FORM_STATE
} from '../../constants';

const FormReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_FORM:
            return state;
        case ON_FORM_SUBMITED:
            console.log("Setting message");
            return { message: 'Product is saved' }
        case ON_EMPTY_FORM_STATE:
            console.log("Reqwrting message");
            return {message:''}
        case ON_FORM_SUBMIT_ERROR:
            return { message: 'Something is wrong... Product not saved' }
        default:
            return state;
    }
}
export default FormReducer;