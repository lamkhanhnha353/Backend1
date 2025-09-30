// require('d')
const express = require('express');
const path = require('path');
const app = express()
const port = 3000
const configViewEngine = require('./config/viewEngine');
const routerWeb = require('./routes/web')

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine
configViewEngine(app);

//khai bao router
app.use('/', routerWeb);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})
