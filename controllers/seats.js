const models = require('../models')
const Seats = models.seats
const Theaters = models.theaters


exports.index = (req, res) => {
    let query
    query = Seats.findAll({
        include: [{
            model: Theaters,
            as: "theaterid"
        }]
    })
    query.then(data=>res.send(
        data
    )
    )
}