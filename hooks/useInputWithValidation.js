import {useState, useEffect, useRef, useCallback} from "react";

/**
 * enhanced input value with validation and dirty detection
 *
 * Example usage:
 * useInputWithValidation('default', [
 *    { validate: requiredValidator },
 *    { validate: minLengthValidator(5) },
 * ]);
 *
 * @param {*} defaultValue
 * @param {[{validate: function, parameters: object}]} validators
 * @param validateOnEveryKeystroke
 * @return [{ value, error: string, isDirty: boolean }, setValue: function]
 */
export default function useInputWithValidation(defaultValue, validators = [], validateOnEveryKeystroke = false) {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(null);
  const [isDirty, setIsDirty] = useState(false);
  const valueHasChanged = useRef(false);

  const validate = useCallback(() => {
    const result = {
      isValid: true,
      errors: [],
    };
    valueHasChanged.current = true;

    if (validators?.length > 0) {
      validators.some(validator => {
        const validatorResult = validator.validate(value)
        if (!validatorResult.isValid) {
          result.isValid = false;
          setError(validatorResult.error)
          return true;
        }
        return false;
      });
    }
    if (result.isValid && error) {
      setError(null);
    }
    return result.isValid;
  }, [error, validators, value]);

  useEffect(() => {
    if (value !== defaultValue || valueHasChanged.current) {
      if (!isDirty) setIsDirty(true);
      if (validateOnEveryKeystroke) validate();
    }
  }, [validateOnEveryKeystroke, defaultValue, isDirty, validate, value]);

  return [{ value, error, isDirty }, setValue, validate];
}
