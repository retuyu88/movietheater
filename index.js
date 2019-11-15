var express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

var app = express()
app.use(bodyParser.json())
const port = Number(process.env.PORT || 5000)

//create the homepage route
app.use(bodyParser.urlencoded({ extended: false }));
//create the homepage route
app.group("/api/v1", (router) => {
    router.post('/login', AuthController.login)
    router.get('/admin/:admin_id', AuthController.index)
})
//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))