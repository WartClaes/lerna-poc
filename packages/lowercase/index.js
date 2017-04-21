function lowercase(text) {
    if(typeof text !== 'string') {
        throw new Error('Provided value is not a string');
    }

    return text.toLowerCase();
}

module.exports = lowercase;
