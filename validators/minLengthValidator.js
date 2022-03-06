/**
 * Validates a string for given minimum length
 *
 * @example
 * `
 * let result = minLengthValidator(string, 4);
 * console.log(result.isValid) // true;
 *
 * result = minLengthValidator(foo, 4);
 * console.log(result.isValid) // false;
 * console.log(result.error) // string_too_short
 *
 * @param minLength
 */
const validate = minLength => source => {
    const result = {
        isValid: true,
        error: null,
    };

    if (source.length < minLength) {
        result.isValid = false;
        result.error = `Value needs to contain at least ${minLength} characters`;
    }

    return result;
};

export default validate;
