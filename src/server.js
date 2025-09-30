const express = require('express');
const path = require('path');
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//template engine
app.set('views', path.join(__dirname, 'views')); // rouse dẫn tới thu mục view
app.set('view engine', 'ejs');

app.get('/hoidanit', (req,  res) =>{
  res.render('example.ejs');
})


app.get('/hello', (req, res) => res.send('<h1>Hello anh em </h1>'))
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
