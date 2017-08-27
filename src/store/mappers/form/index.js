import {SUBMIT_FORM} from '../../constants';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitForm: (data) => {
            dispatch({
                type: SUBMIT_FORM,
                payload: data
            });
        }
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.form,
    }
}
export { mapDispatchToProps, mapStateToProps }