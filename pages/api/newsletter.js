import requiredValidator from "../../validators/requiredValidator";
import emailValidator from "../../validators/emailValidator";

const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

function validate(input) {
  return requiredValidator(input.firstName).isValid
    && requiredValidator(input.lastName).isValid
    && requiredValidator(input.email).isValid
    && emailValidator(input.email).isValid;
}

export default async function handler(req, res) {
  try {
    const isValid = validate(req.body);
    if (isValid) {
      const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_NEWSLETTER_LIST_ID, {
        email_address: req.body.email,
        status: "subscribed",
      });
      res.status(200).json({ success: true })
    } else {
      res.status(400).json({success: false})
    }
  } catch (err) {
    if (err.status) {
      res.status(err.status).json({ success: false, error: err.response.body?.title })
    } else {
      res.status(500).json({success: false, error: 'Unknown error'})
    }
  }
}
