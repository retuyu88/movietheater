const models = require('../models')
const Tickets = models.tickets
const Bookings = models.bookings
const Staffs = models.staffs
const Seats = models.seats
const Time_slots = models.time_slots

exports.index = (req, res) => {
    let query
    query = Bookings.findAll({
        include: [{
            model: Seats,
            as: "seatid"
        },{
            model: Time_slots,
            as: "timesid"
        }]
    })
    query.then(data=>res.send(
        data
    )
    )
}

exports.one = (req, res) => {
    let query
    query = Tickets.findOne({
        where :{
            id : req.params.id
        },
        include: [{
            model: Bookings,
            as: "bookingid"
        },{
            model: Staffs,
            as: "staffid"
        }]
    })
    query.then(data=>res.send(
        data
    )
    )
}

