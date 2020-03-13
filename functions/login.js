const faunadb = require('faunadb')
require("dotenv").config()
// Initializing MailGun
const mailgun = require('mailgun-js')
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
})
//Creating a Fauna client and a query object
const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNA_DB_SECRET
})

exports.handler = (event, _context, callback) => {
  const data = JSON.parse(event.body)
  const user = {
    data : data
  }
  client.query(q.Create(q.Ref("/users"),user))
  .then(() => {
    /*Send email if user is successfully created*/
    const email = {
      from: 'Netflix Clone <clone@netflix.com>',
      to: `${data.fullname} <${data.email}>`,
      subject : 'Netflix account creation',
      text: 'Your Netflix Clone account has been created successfully. To start watching your favorite shows click on this link ->'
    }
    mg.messages().send(email,(error,response) => {
      callback(error,{
        statusCode: 200,
        body: JSON.stringify(response)
      })
    })
  }).catch((error) => {
    return callback(error, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  })
}