
/**
 * Validates a email
 *
 *
 * @example
 * `
 * let result = emailValidator(user@test.com);
 * console.log(result.isValid) // true;
 *
 * result = emailValidator(user@test);
 * console.log(result.isValid) // false;
 * console.log(result.error) // email_not_valid
 *
 *
 * @param email
 */
export default function validate(email) {
  const result = {
    isValid: true,
    error: null,
  };

  const re = /^\S+@\S+\.\S+$/; // eslint-disable-line

  if (email && !re.test(email)) {
    result.isValid = false;
    result.error = 'Invalid email';
  }

  return result;
}
