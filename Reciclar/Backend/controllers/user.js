const {User} = require ('../models')
// const {isValidPassword} = require('../services/validations')

//Show all users
async function getAllUsers(req, res){
    try{
        const user = await User.findAll();
        res.send(user)
    } catch (error) {
        res.send(error)
    }
}

//Register user
async function registerController(req, res, next){
    try {
        const user = await User.create(req.body);
        res.status(200).json({
            message: 'register done',
            user: user
        })
    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: 'register not done',
            error: error
        })
    }
}

module.exports = {
    getAllUsers, 
    registerController
}