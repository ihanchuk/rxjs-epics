import { PRODUCTS_DISPLAY } from '../../constants';

const mapDispatchToProps = (dispatch) => {
    return {
        onDisplayMessage: () => {  dispatch({type:'ON_PRODUCTS_FETCHNG'}); },
        onComponentMounted: () => {
            dispatch({ type: PRODUCTS_DISPLAY });
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