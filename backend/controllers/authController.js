import User from '../models/User.js'
import {StatusCodes} from 'http-status-codes'
import {BadRequest} from '../error/index.js'


const register = async (req,res ) => {
    const {firstName, lastName, email, password} = req.body
    if(!firstName || !lastName || !email || !password){
        throw new BadRequest('Please provide all information')
    }
    const emailIsInUse = await User.findOne({email})
    if(emailIsInUse){
        throw new BadRequest('Email is already in use')
    }
       const user = await User.create(req.body)
       res.status(StatusCodes.CREATED).json({user})
}

const login = async (req,res) => {
    res.send('login user')
}

const update = async (req,res) => {
    res.send('update user ')
}

export {register, login, update};