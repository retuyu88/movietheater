const models = require('../models')
const Tickets = models.tickets
const Bookings = models.bookings
const Staffs = models.staffs

exports.index = (req, res) => {
    let query
    query = Tickets.findAll({
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

