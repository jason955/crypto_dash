const Event = require('../models/event-model')


createEvent = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Event',
        })
    }

    const ev = new Event(body)

    if (!ev) {
        return res.status(400).json({ success: false, error: err })
    }

    ev
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: ev._id,
                message: 'Event created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Event not created!',
            })
        })
}

updateEvent = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Event.findOne({ _id: req.params.id }, (err, ev) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Event not found!',
            })
        }
        ev.title = body.title
        ev.date = body.date
        ev.amount = body.amount
        ev
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: ev._id,
                    message: 'Event updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Event not updated!',
                })
            })
    })
}

deleteEvent = async (req, res) => {
    await Event.findOneAndDelete({ _id: req.params.id }, (err, ev) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Event) {
            return res
                .status(404)
                .json({ success: false, error: `Event not found` })
        }

        return res.status(200).json({ success: true, data: ev })
    }).catch(err => console.log(err))
}

getEventById = async (req, res) => {
    await Event.findOne({ _id: req.params.id }, (err, ev) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!event) {
            return res
                .status(404)
                .json({ success: false, error: `Event not found` })
        }
        return res.status(200).json({ success: true, data: ev })
    }).catch(err => console.log(err))
}


getEvents = async (req, res) => {
    await Event.find({}, (err, ev) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!ev.length) {
            return res
                .status(404)
                .json({ success: false, error: `Event not found` })
        }
        return res.status(200).json({ success: true, data: ev })
    }).catch(err => console.log(err))
}

getEventData = async (req, res) => {

    let ev = await Event.findOne({ _id: req.params.id }, (err, ev) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!ev) {
            return res
                .status(404)
                .json({ success: false, error: `Event not found` })
        }
        return res.status(200).json({ success: true, data: ev })
    }).catch(err => console.log(err))

    // let accounts = await Account.find({ _id: o }, (err, account) => {
    //     if (err) {
    //         return res.status(400).json({ success: false, error: err })
    //     }
    //     console.log(account)
    //     if (!account) {
    //         return res
    //             .status(404)
    //             .json({ success: false, error: `Account not found` })
    //     }
    //     return res.status(200).json({ success: true, data: account })
    // }).catch(err => console.log(err))
    // console.log(accounts)
    return ev
    //let trackers = getTrackerById(Event.trackers, res)

}


module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getEvents,
    getEventById,
    getEventData,
}
