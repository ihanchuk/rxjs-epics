import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/RaisedButton';

class Products extends Component {
    constructor() {
        super();
        this.logProps = () =>{
            console.log(this.props);
        }
    }
    render() {
        return (<div>
            Total Products:: {this.props.products.length}
            <div>
                <button onClick={this.props.onDisplayMessage}> Show Me </button>
                <button onClick={this.props.onHideClick}> Hide Me </button>
                <button onClick={this.logProps}> Log me!!! </button>
                <hr />
                <h1>{this.props.message.messageText}</h1>
            </div>
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
        message: state.message
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);