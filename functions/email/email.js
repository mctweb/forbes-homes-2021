const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API)

exports.handler = async (event, context, callback) => {


  const incomingdata = JSON.parse(event.body)

  // configure email
  const msg = {
    from: 'Website Enquiry <no-reply@forbeshomes.co.uk>',
    to: 'enquiries@forbeshomes.co.uk',
    templateId: 'd-026268893bc94aaba191a1b0d215124c',
    dynamic_template_data: incomingdata,
  }

  try {
    await sgMail.send(msg)
    return callback(null, {
      statusCode: 200,
      body: 'Message sent',
    })
  } catch (e) {
    return callback(null, {
      statusCode: e.code,
      body: e.message,
    })
  }
}
