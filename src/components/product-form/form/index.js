import React from 'react';

import rules from './validation/validation-rules';
import state from './default-state/state';
import { isStringDefined } from '../../../helpers/strings';

import { updateRadio, validateAndUpdate, validateForm } from './helpers/index';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../../store/mappers/form';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fields: { ...state.fields }, errors: { ...state.errors } };

        this.validation = rules;
        this.validateAndUpdate = validateAndUpdate.bind(this);
        this.updateRadio = updateRadio.bind(this);
        this.saveToServer = () => {
            let validity = validateForm(this.state);
            if (validity) {
                this.props.onSubmitForm(this.state.fields);
                this.setState({ fields: { ...state.fields }, errors: { ...state.errors } });
            }
        }
    }

    render() {
        return (
            <div className="form-container">
                <div>{JSON.stringify(this.props)}</div>
                <div>{JSON.stringify(this.state)}</div>
                <form>
                    <div>
                        <TextField
                            id={"productName"}
                            errorText={this.state.errors.productName}
                            onChange={this.validateAndUpdate}
                            value={this.state.fields.productName}
                            floatingLabelText="Product name" />
                    </div>
                    <div>
                        <TextField
                            id={"productUrl"}
                            errorText={this.state.errors.productUrl}
                            onChange={this.validateAndUpdate}
                            value={this.state.fields.productUrl}
                            floatingLabelText="product URL" />
                    </div>
                    <div>
                        <TextField
                            id={"productPrice"}
                            errorText={this.state.errors.productPrice}
                            onChange={this.validateAndUpdate}
                            value={this.state.fields.productPrice}
                            floatingLabelText="product price" />
                    </div>
                    <div>
                        <RadioButtonGroup
                            name="shipSpeed"
                            defaultSelected={this.state.fields.productColor}
                            onChange={this.updateRadio}
                            id="productColor"
                        >
                            <RadioButton value="gold" label="Gold" />
                            <RadioButton value="black" label="Black" />
                            <RadioButton value="silver" label="Silver" />
                            <RadioButton value="red" label="Red" />
                            <RadioButton value="Green" label="Green" />
                        </RadioButtonGroup>
                    </div>
                    <div>
                        <TextField
                            id={"productShortDesc"}
                            errorText={this.state.errors.productShortDesc}
                            onChange={this.validateAndUpdate}
                            multiLine={true}
                            value={this.state.fields.productShortDesc}
                            floatingLabelText="Short Description" />
                    </div>
                    <div>
                        <TextField
                            id={"productLongDesc"}
                            multiLine={true}
                            errorText={this.state.errors.productLongDesc}
                            onChange={this.validateAndUpdate}
                            value={this.state.fields.productLongDesc}
                            floatingLabelText="Long Description" />
                    </div>
                    <div>
                        <FlatButton
                            label="Save product"
                            onClick={this.saveToServer}
                            primary={true} />
                    </div>
                </form>
                <Snackbar
                    open={isStringDefined(this.props.form.message)}
                    message={this.props.form.message || ''}
                    autoHideDuration={5000}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);