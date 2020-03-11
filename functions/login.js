exports.handler = (event, _context, callback) => {
  // console.log({event})
  // callback(null,{
  //   statusCode: 200,
  //   body: JSON.stringify(event.body)
  // })
  console.log(process.env.MAILGUN_API_KEY)
  console.log(event.body)
  // const mailgun = require('mailgun-js')
  // const mg = mailgun({
  //   apiKey: process.env.MAILGUN_API_KEY,
  //   domain: process.env.MAILGUN_DOMAIN,
  // })
  // // console.log(event.body)
  // const data = event.body
  // const email = {
  //   from: 'Netflix Clone <netflix@clone.com>',
  //   to: `${data.fullname} <${data.email}>`,
  //   subject : 'Netflix account creation',
  //   text: 'Your Netflix Clone account has been created, to activate it click on this link'
  // }

  // mg.messages.send(email,(error,response) => {
  //   callback(error,{
  //     statusCode: 200,
  //     body: JSON.stringify(response)
  //   })
  // })

}