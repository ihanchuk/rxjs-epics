import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/RaisedButton';

class Products extends Component {
    constructor() {
        super();
    }
    render() {
        return (<div>
            Total Products:: {this.props.products.length}
            <button onClick={this.props.onDisplayMessage}> Click me </button>
            <button onClick={this.logProps}> Log me!!! </button>
            {this.props.message.messageText}
            <Snackbar
                open={this.props.message.display}
                message={this.props.message.displayText}
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose}
            />
        </div>)
    }
}

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
        }
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        message: state.message
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);