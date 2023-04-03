// import { User } from '../models/userModel'
// import jwt from 'jsonwebtoken'
// import { connectToDatabase } from '../helpers/connectToDatabase'
import { Request, Response } from 'express'

// const createToken = (_id:string) => {
//   return jwt.sign({ _id }, process.env.JWTSECRET, { expiresIn: '3d' })
// }

// login a user
const loginUser = async (req:Request, res:Response) => {
  // const { email, password } = req.body

  try {
    // await connectToDatabase()
    // const user = await User.login(email, password)

    // // create a token
    // const token = createToken(user._id)

    // res.status(200).json({ email, token })
    throw Error('Login is disabled')
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// signup a user
const signupUser = async (req:Request, res:Response) => {
  // const { email, password } = req.body

  try {
    // await connectToDatabase()
    // const user = await User.signup(email, password)

    // // create a token
    // const token = createToken(user._id)

    // res.status(200).json({ email, token })
    throw Error('Login is disabled')
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export { signupUser, loginUser }
