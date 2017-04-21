function uppercase(text) {
    if(typeof text !== 'string') {
        throw new Error('Provided value is not a string');
    }

    return text.toUpperCase();
}

module.exports = uppercase;
