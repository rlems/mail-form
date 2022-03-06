import FormField from "../FormField/FormField";
import Label from "../Label/Label";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import useInputWithValidation from "../../hooks/useInputWithValidation";
import requiredValidator from "../../validators/requiredValidator";
import emailValidator from "../../validators/emailValidator";
import trueValidator from "../../validators/trueValidator";
import InputError from "../InputError/InputError";
import styles from './NewsletterSignupForm.module.scss';
import {useState} from "react";
import Newsletter from "../../services/Newsletter";
import FormSubmitSuccessNotice from "../FormSubmitSuccessNotice/FormSubmitSuccessNotice";

const countryOptions = [
  { value: 'nl', label: 'The Netherlands' },
  { value: 'be', label: 'Belgium' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
]

export default function NewsletterSignupForm() {
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName, validateFirstName] = useInputWithValidation('', [
    { validate: requiredValidator }
  ]);
  const [lastName, setLastName, validateLastName] = useInputWithValidation('', [
    { validate: requiredValidator }
  ]);
  const [email, setEmail, validateEmail] = useInputWithValidation('', [
    { validate: requiredValidator },
    { validate: emailValidator },
  ]);
  const [phone, setPhone] = useInputWithValidation('');
  const [country, setCountry] = useInputWithValidation('');
  const [agreeToMails, setAgreeToMails, validateAgreeToMails] = useInputWithValidation(false, [
    { validate: trueValidator },
  ]);

  function validateForm() {
    const firstNameIsValid = validateFirstName();
    const lastNameIsValid = validateLastName();
    const emailIsValid = validateEmail();
    const agreeToMailsValid = validateAgreeToMails();

    return !(!firstNameIsValid || !lastNameIsValid || !emailIsValid || !agreeToMailsValid)
  }

  async function handleSubmit(e) {
    if (!isLoading) {
      if (error) setError('');
      e.preventDefault();
      const isValid = validateForm();

      if (isValid) {
        setIsLoading(true);
        const response = await Newsletter.subscribe({
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          phone: phone.value,
          country: country.value,
        })

        if (response.status === 200) {
          setIsSuccess(true);
        } else {
          const responseBody = await response.json();
          setError(responseBody.error)
        }
        setIsLoading(false);
      }
    }
  }

  if (isSuccess) return (
    <FormSubmitSuccessNotice>
      <h2>Ready to rock</h2>
      <p className="mb-6">Thank you for signing up. We’ll keep you posted on the latest and greatest products for your boat.</p>
      <Button label="Back to home" />
    </FormSubmitSuccessNotice>
  );

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={`${styles.formFieldsContainer} row`}>
        {error && (
          <div className="col-12 mb-5">
            {error && <InputError error={error} />}
          </div>
        )}
        <div className="col-12 col-md-6">
          <FormField>
            <Label id="firstname" label="First name" />
            <Input
              id="firstname"
              placeholder="Enter first name"
              value={firstName.value}
              hasError={!!firstName.error}
              onChange={setFirstName}
              onBlur={validateFirstName}
              required
            />
            {firstName.error && <InputError error={firstName.error} />}
          </FormField>
        </div>
        <div className="col-12 col-md-6">
          <FormField>
            <Label id="lastname" label="Last name" />
            <Input
              id="lastname"
              placeholder="Enter last name"
              value={lastName.value}
              hasError={!!lastName.error}
              onChange={setLastName}
              onBlur={validateLastName}
              required
            />
            {lastName.error && <InputError error={lastName.error} />}
          </FormField>
        </div>
        <div className="col-12">
          <FormField>
            <Label id="email" label="Email" />
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email.value}
              hasError={!!email.error}
              onChange={setEmail}
              onBlur={validateEmail}
              required
            />
            {email.error && <InputError error={email.error} />}
          </FormField>
        </div>
        <div className="col-12 col-md-6">
          <FormField>
            <Label
              id="phone"
              label="Phone number"
            />
            <Input
              type="tel"
              id="phone"
              value={phone.value}
              onChange={setPhone}
            />
          </FormField>
        </div>
        <div className="col-12 col-md-6">
          <FormField>
            <Label id="country" label="Country" />
            <Select
              id="country"
              options={countryOptions}
              value={country.value}
              onChange={setCountry}
            />
          </FormField>
        </div>
        <div className="col-12 col-lg-6">
          <FormField>
            <Checkbox
              id="agreeToMails"
              label="Select this box if we can contact your email with updates"
              checked={agreeToMails.value}
              onChange={setAgreeToMails}
              hasError={!!agreeToMails.error}
              onBlur={validateAgreeToMails}
            />
            {agreeToMails.error && <InputError error={agreeToMails.error} />}
          </FormField>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Button label="Send" type="submit" disabled={isLoading} />
        </div>
      </div>
    </form>
  )
}
