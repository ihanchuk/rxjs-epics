import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps }
    from '../../store/mappers/products';
import CircularProgress from 'material-ui/CircularProgress';
import Product from './product';

class Products extends React.PureComponent {

    componentDidMount() {
        this.props.onComponentMounted();
    }

    /*
         In a 'Production code' i would never use JSON.stringify, but since we are dealing 
         with a super small array in a test env, i think it is possible tu use stringify as 
         'fast hack'
    */
    shouldComponentUpdate(newProps) {
        let compareResult = JSON.stringify(this.props.products)
            ===
            JSON.stringify(newProps.products);
        return !compareResult;
    }

    render() {
        let products = this.props.products;
        if (products.length > 0) {
            return (
                <div className="products-area">
                    {products.map((product, index) => <Product key={index} product={product} />)}
                </div>)
        }
        else return <CircularProgress />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);