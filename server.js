const express = require('express')
const path = require('path')
const app = express()

// Based on https://stackoverflow.com/questions/47416277/serving-multiple-react-apps-with-client-side-routing-in-express
// when going to `/quote`, serve the files at portofolio/quote/build/* as static files
app.use('/portfolio/quote', express.static(path.join(__dirname, 'public/portfolio/quote/build')))
// when going to `/`, serve the files at build/* as static files
app.use(express.static(path.join(__dirname, 'build')))


// These are necessary for routing within react
app.get('/portfolio/quote/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/portfolio/quote/build/index.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(process.env.PORT || 8080)
console.log('> Listening on port 8080')
