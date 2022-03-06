const validate = source => {
    const result = {
        isValid: source === true,
        error: null,
    };

    console.log('re', result); // eslint-disable-line
    if (!result.isValid) {
        result.error = 'Value must be checked';
    }

    return result;
};

export default validate;
