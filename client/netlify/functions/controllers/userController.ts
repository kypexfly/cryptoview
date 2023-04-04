import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { connectToDatabase } from '../helpers/connectToDatabase'
import { Request, Response } from 'express'
import { z } from 'zod'

const createToken = (_id: string): string => {
  return jwt.sign({ _id }, process.env.JWTSECRET, { expiresIn: '3d' })
}

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

// login a user
const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = userSchema.parse(req.body)
    const db = await connectToDatabase()
    const users = db.collection('users')
    const user = await users.findOne({ email })

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      throw Error('Incorrect password')
    }

    // create a token
    const token = createToken(user._id)

    res.status(200).json({ email, token })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json(
        error.issues.map((issue) => ({
          path: issue.path,
          message: issue.message,
        })),
      )
    }

    res.status(400).json({ error: error.message })
  }
}

// signup a user
const signupUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = userSchema.parse(req.body)
    const db = await connectToDatabase()
    const users = db.collection('users')
    const exists = await users.findOne({ email })

    if (exists) {
      throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const result = await users.insertOne({ email, password: hash })

    // create a token
    const token = createToken(result.insertedId)

    res.status(200).json({ email, token })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json(
        error.issues.map((issue) => ({
          path: issue.path,
          message: issue.message,
        })),
      )
    }
    res.status(400).json({ error: error.message })
  }
}

export { signupUser, loginUser }
