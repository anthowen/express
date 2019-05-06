const express = require('express')
const helmet = require('helmet')
const MessagingResponse = require('twilio').twiml.MessagingResponse

const app = express();
// add some security-related headers to the response
app.use(helmet())

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

app.get('/sms', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`
        <h1><marquee direction=right>Hello from Express path '/' on Now 2.0!</marquee></h1>
        <h2>Go to <a href="/about">/about</a></h2>
    `)
});

app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`
        <h1><marquee direction=right>Hello from Express path '/' on Now 2.0!</marquee></h1>
        <h2>Go to <a href="/about">/about</a></h2>
    `)
})

module.exports = app
