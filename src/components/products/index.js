import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

class Products extends Component {
    constructor() {
        super();
        this.logProps = () => {
            console.log(this.props);
        }
    }
    render() {
        return (<div>
            Total Products:: {this.props.products.length}
            <div>
                <RaisedButton
                    onClick={this.props.onDisplayMessage}
                    label="Show  message"
                    primary={true}
                />
                <RaisedButton
                    onClick={this.props.onHideClick}
                    label="Hide  message"
                    primary={true}
                />
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