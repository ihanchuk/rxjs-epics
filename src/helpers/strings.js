const isStringDefined = (str) => {
    return ( (typeof str === 'string') && str.length > 0 );
}

export {isStringDefined};