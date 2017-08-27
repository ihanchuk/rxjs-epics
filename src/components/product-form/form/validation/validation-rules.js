const rules = {
    productName: {
        rule: /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-|)[a-zA-Z0-9])*[a-zA-Z0-9]+$/,
        warning: "Only letters and numbers!"
    },
    productUrl: {
        rule: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
        warning: "Hm... it's not url at all"
    },
    productPrice: {
        rule: /^\d{0,8}(\.\d{1,4})?$/,
        warning: 'xxxx.xx'
    },
    productLongDesc: {
        rule: /[\w\s]+/,
        warning: 'Must not be empty'
    },
    productShortDesc: {
        rule: /[\w\s]+/,
        warning: 'Must not be empty'
    }
}

export default rules;