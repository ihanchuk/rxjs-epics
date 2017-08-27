import {
    SUBMIT_FORM,
    ON_FORM_SUBMITED,
    ON_FORM_SUBMIT_ERROR
} from '../../constants';

const FormReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_FORM:
            return state;
        case ON_FORM_SUBMITED:
            console.log("Product Saved");
            return { message: 'Product saved' }
        case ON_FORM_SUBMITED:
            return { message: 'Product saved' }
        case ON_FORM_SUBMIT_ERROR:
            return {message:'Something is wrong... Product not saved'}
        default:
            return state;
    }
}
export default FormReducer;