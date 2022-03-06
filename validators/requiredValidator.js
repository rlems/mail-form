import minLengthValidator from "validators/minLengthValidator";

const validate = source => {
    const result = minLengthValidator(1)(source);

    if (!result.isValid) {
        result.error = 'Value is required';
    }

    return result;
};

export default validate;
