const Helper = {
    isArray: (obj) => Array.isArray(obj) || obj instanceof Array,
    isFunc: (obj) => typeof obj === 'function',
    isNil: (obj) => obj === void 0 || obj === null,
    isNullOrWhitespace: (obj) => Helper.isNil(obj) || (obj + '').replace(/ /g, '').length === 0
}

export default Helper