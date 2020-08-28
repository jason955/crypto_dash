const express = require('express')
const AccountCtrl = require('../controllers/account-ctrl')
const router = express.Router()

router.post('/account', AccountCtrl.createAccount)
router.put('/account/:id', AccountCtrl.updateAccount)
router.delete('/account/:id', AccountCtrl.deleteAccount)
router.get('/account/:id', AccountCtrl.getAccountById)
router.get('/accounts', AccountCtrl.getAccounts)

module.exports = router
