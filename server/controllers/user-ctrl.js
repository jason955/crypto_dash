const User = require('../models/user-model')
const Account = require('../models/account-model')
const Tracker = require('../models/tracker-model')

createUser = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a User',
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
}

updateUser = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }
        user.username = body.username
        user.password = body.password
        user.activities = body.activities
        user
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'User updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User not updated!',
                })
            })
    })
}

deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUserById = async (req, res) => {
    await User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUserByNameAndPass = async (req, res) => {
    await User.findOne({username:req.params.username, password:req.params.password}, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))
}

getUserData = async (req, res) => {

    let user = await User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
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
    return user
    //let trackers = getTrackerById(user.trackers, res)

}
getAccountById2 = async (req, res) => {
    await Account.find({ _id: req }, (err, account) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        console.log(account)
        if (!account) {
            return res
                .status(404)
                .json({ success: false, error: `Account not found` })
        }
        return res.status(200).json({ success: true, data: account })
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

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
    getUserByNameAndPass,
    getUserData,
}
