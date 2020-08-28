const express = require('express')
const TrackerCtrl = require('../controllers/tracker-ctrl')
const router = express.Router()

router.post('/tracker', TrackerCtrl.createTracker)
router.put('/tracker/:id', TrackerCtrl.updateTracker)
router.delete('/tracker/:id', TrackerCtrl.deleteTracker)
router.get('/tracker/:id', TrackerCtrl.getTrackerById)
router.get('/trackers', TrackerCtrl.getTrackers)

module.exports = router
