import { Request, Response } from 'express'
import User from '~/models/schemas/Users.schema'
import databaseService from '~/services/database.services'
import usersService from '~/services/users.services'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterReqBody } from '~/models/requests/Users.requests'
export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'khang@gmail.com' && password === '123123123') {
    return res.json({
      data: [
        { name: 'Minh', yob: 2004 },
        { name: 'Nhim', yob: 2004 },
        { name: 'Manh', yob: 2004 },
        { name: 'Thay', yob: 2004 }
      ]
    })
  } else {
    return res.status(400).json({
      error: 'login failed'
    })
  }
}

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  try {
    const result = await usersService.register(req.body)
    return res.status(201).json({
      message: 'Register success',
      result
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Register fail',
      error
    })
  }
}
