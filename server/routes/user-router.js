const express = require('express')
const UserCtrl = require('../controllers/user-ctrl')
const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/user/:username/:password', UserCtrl.getUserByNameAndPass)
router.get('/users', UserCtrl.getUsers)
router.get('/getUserData/:id', UserCtrl.getUserData)

module.exports = router
