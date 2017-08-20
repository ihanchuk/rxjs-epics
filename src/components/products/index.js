import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps,  mapStateToProps} from '../../store/mappers/products';
import AllProducts from './all-products';

class Products extends Component {
    componentDidMount(){
        this.props.onComponentMounted();
    }
    render() {
        return  <div><AllProducts products={this.props.products} /></div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);