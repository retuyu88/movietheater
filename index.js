var express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

var app = express()
app.use(bodyParser.json())
const port = Number(process.env.PORT || 5000)

//create the homepage route
app.use(bodyParser.urlencoded({ extended: false }));

const TicketController = require('./controllers/tickets')
const BookingController = require('./controllers/bookings')
//create the homepage route
app.group("/api/v1", (router) => {
    //get information of all tickets
    router.get('/tickets', TicketController.index)
    //get information of a ticket
    router.get('/ticket/:id', TicketController.one)
    //get information of all booking
    router.get('/bookings', BookingController.index)

})
//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))