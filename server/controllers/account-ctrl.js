const Account = require('../models/account-model')

createAccount = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Account',
        })
    }

    const account = new Account(body)

    if (!account) {
        return res.status(400).json({ success: false, error: err })
    }

    account
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: account._id,
                message: 'Account created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Account not created!',
            })
        })
}

updateAccount = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Account.findOne({ _id: req.params.id }, (err, account) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Account not found!',
            })
        }
        account.name = body.name
        account.time = body.time
        account.rating = body.rating
        account
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: account._id,
                    message: 'Account updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Account not updated!',
                })
            })
    })
}

deleteAccount = async (req, res) => {
    await Account.findOneAndDelete({ _id: req.params.id }, (err, account) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!account) {
            return res
                .status(404)
                .json({ success: false, error: `Account not found` })
        }

        return res.status(200).json({ success: true, data: account })
    }).catch(err => console.log(err))
}

getAccountById = async (req, res) => {
    await Account.findOne({ _id: req.params.id }, (err, account) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!account) {
            return res
                .status(404)
                .json({ success: false, error: `Account not found` })
        }
        return res.status(200).json({ success: true, data: account })
    }).catch(err => console.log(err))
}

getAccounts = async (req, res) => {
    await Account.find({}, (err, accounts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!accounts.length) {
            return res
                .status(404)
                .json({ success: false, error: `Account not found` })
        }
        return res.status(200).json({ success: true, data: accounts })
    }).catch(err => console.log(err))
}

module.exports = {
    createAccount,
    updateAccount,
    deleteAccount,
    getAccounts,
    getAccountById,
}
