import { string, util, isValid } from 'valid.js';

const rules = {
    productName: {
        rule: (str) => {
            let result = isValid(str, [string.minLength(2), util.isRequired]);
            return result;
        },
        warning: "Only letters and numbers!"
    },
    productUrl: {
        rule: (url) => {
            let result = isValid(url,
                [
                    string.regex(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/),
                    util.isRequired
                ]);
            return result;
        },
        warning: "Hm... it's not URL at all"
    },
    productPrice: {
        rule: (price) => {
            return +price > 0;
        },
        warning: 'xxxx.xx'
    },
    productLongDesc: {
        rule: (str) => {
            let result = isValid(str, [string.minLength(5), util.isRequired]);
            return result;
        },
        warning: 'Must not be empty'
    },
    productShortDesc: {
        rule: (str) => {
            let result = isValid(str, [string.minLength(2), util.isRequired]);
            return result;
        },
        warning: 'Must not be empty'
    }
}

export default rules;