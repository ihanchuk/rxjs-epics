import rules from '../validation/validation-rules';

const validateAndUpdate = function (e) {
    let key = e.target.id;
    let val = e.target.value;
    let validationResult = this.validationRulesAndMessages[key].rule.test(val);
    let state = {
        ...this.state
    };
    state.fields[key] = val;
    if (!validationResult) {
        state.errors[key] = this.validationRulesAndMessages[key].warning;
    } else {
        state.errors[key] = null;
    }
    this.setState(state);
}

const updateRadio = function (e) {
    let val = e.target.value;
    let state = {
        ...this.state
    };
    state.fields["productColor"] = val;
    this.setState(state);
}

const validateForm = (state) => {
    let formValidity = true;
    let fields = Object.getOwnPropertyNames(state.fields);
    fields.forEach((el, index) => {
        let val = state.fields[el];
        let rule = rules[el];
        if (rule && !rule.rule.test(val)) formValidity = false;
    });
    return formValidity;
}

export { validateAndUpdate, updateRadio, validateForm }