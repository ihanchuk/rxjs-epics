import {PRODUCTS_DISPLAY, ON_PRODUCTS_FETCHED} from '../../constants';

const mapDispatchToProps = (dispatch) => {
    return {
        onDisplayMessage: () => {
            dispatch({
                type: 'SET_MESSAGE',
                payload:
                {
                    messageText: 'testing dialog display',
                    display: true
                }
            });
        },
        onComponentMounted: () =>{
            dispatch({ type: PRODUCTS_DISPLAY});
        },
        onHideClick: () => {
            dispatch({
                type: 'HIDE_MESSAGES',
            });
        }
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

export { mapDispatchToProps, mapStateToProps }