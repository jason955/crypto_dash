const Tracker = require('../models/tracker-model')

createTracker = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Tracker',
        })
    }

    const tracker = new Tracker(body)

    if (!tracker) {
        return res.status(400).json({ success: false, error: err })
    }

    tracker
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: tracker._id,
                message: 'Tracker created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Tracker not created!',
            })
        })
}

updateTracker = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Tracker.findOne({ _id: req.params.id }, (err, tracker) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Tracker not found!',
            })
        }
        tracker.name = body.name
        tracker.time = body.time
        tracker.rating = body.rating
        tracker
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: tracker._id,
                    message: 'Tracker updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Tracker not updated!',
                })
            })
    })
}

deleteTracker = async (req, res) => {
    await Tracker.findOneAndDelete({ _id: req.params.id }, (err, tracker) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tracker) {
            return res
                .status(404)
                .json({ success: false, error: `Tracker not found` })
        }

        return res.status(200).json({ success: true, data: tracker })
    }).catch(err => console.log(err))
}

getTrackerById = async (req, res) => {
    await Tracker.findOne({ _id: req.params.id }, (err, tracker) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tracker) {
            return res
                .status(404)
                .json({ success: false, error: `Tracker not found` })
        }
        return res.status(200).json({ success: true, data: tracker })
    }).catch(err => console.log(err))
}

getTrackers = async (req, res) => {
    await Tracker.find({}, (err, Trackers) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!trackers.length) {
            return res
                .status(404)
                .json({ success: false, error: `Tracker not found` })
        }
        return res.status(200).json({ success: true, data: trackers })
    }).catch(err => console.log(err))
}

module.exports = {
    createTracker,
    updateTracker,
    deleteTracker,
    getTrackers,
    getTrackerById,
}
