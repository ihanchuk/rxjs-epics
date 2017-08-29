import { ON_FORM_SUBMITED } from '../../constants';

const formSavedAction = payload => {
    return { type: ON_FORM_SUBMITED, payload };
};

export default formSavedAction;