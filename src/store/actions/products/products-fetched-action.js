import { ON_PRODUCTS_FETCHED } from '../../constants';

const productsFetchedAction = payload => {
    return { type: ON_PRODUCTS_FETCHED, payload };
};

export {productsFetchedAction};