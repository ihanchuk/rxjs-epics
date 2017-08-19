import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Products extends Component {
    constructor() {
        super();
        this.logProps = () => {
            console.log(this.props);
        }
    }
    render() {
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                keyboardFocused={true}
                onClick={this.props.onHideClick}
            />]
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
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.props.message.display}
                >
                    The actions in this window were passed in as an array of React objects.
                </Dialog>
                <Snackbar
                    open={this.props.message.display}
                    message={this.props.message.messageText}
                    autoHideDuration={4000}
                />


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