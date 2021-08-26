const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API)

exports.handler = async (event, context, callback) => {
  console.log('Email Route Hit')
  if (event.httpMethod !== 'POST' || !event.body) {
    return callback(null, {
      statusCode: 500,
      body: 'Method Not Allowed'
    })
  }

  const incomingdata = JSON.parse(event.body)

  // configure email
  const msg = {
    from: 'Forbes Homes Website Enquiry <no-reply@forbeshomes.co.uk>',
    to: 'Forbes Homes <enquiries@forbeshomes.co.uk>',
    replyTo: incomingdata.email || 'enquiries@forbeshomes.co.uk',
    templateId: 'd-dbaafd5dfed649f8b254020d90adaf79',
    dynamic_template_data: incomingdata
  }

  try {
    await sgMail.send(msg)
    return callback(null, {
      statusCode: 200,
      body: 'Message sent'
    })
  } catch (e) {
    return callback(null, {
      statusCode: e.code,
      body: e.message
    })
  }
}
