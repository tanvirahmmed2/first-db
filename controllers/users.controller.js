const { v4: uuid } = require("uuid")



const User = require("../models/users.model")




//get user
exports.getUser = async (req, res) => {

    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json(error.message)
    }
}


//create user
exports.postUser = async (req, res) => {
    try {
        const newUser = new User({
            id: uuid(),
            name: req.body.name,
            age: Number(req.body.age),
        })
        await newUser.save()
        res.status(200).json({
            newUser
        })
    } catch (error) {
        res.status(500).send(error.message)
    }

}

//get one user or find user

exports.getoneUser = async (req, res) => {

    try {
        const user = await User.findOne({ id: req.params.id })
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ id: req.params.id })
        res.status(200).json({
            message: "user is deleted"
        })
    } catch (error) {
        res.status(404).json(error.message)
    }
}


exports.updateUser = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id })
        user.name= req.body.name;
        user.age= Number(req.body.age)
        await user.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json(error.message)
    }
}