import requiredValidator from "../../validators/requiredValidator";
import emailValidator from "../../validators/emailValidator";

const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: '0532680f25b59daddbe76ab71b2a52ae-us14',
  server: 'us14',
});

const MAILCHIMP_NEWSLETTER_LIST_ID = '04addb595e'

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
      const response = await mailchimp.lists.addListMember(MAILCHIMP_NEWSLETTER_LIST_ID, {
        email_address: req.body.email,
        status: "subscribed",
      });
      console.log(response);
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
