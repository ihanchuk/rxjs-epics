import { ON_FORM_SUBMITED, ON_FORM_SUBMIT_ERROR } from '../../constants';

const formSavedAction = payload => {
    return { type: ON_FORM_SUBMITED, payload };
};

export default formSavedAction;