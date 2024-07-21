import express from 'express'

import { createUser, verifyToken,loginUser,getResetPassword,setNewPassword } from '../controllers/authController.js'
import { check } from 'express-validator'


const routerAuth = express.Router()

routerAuth.post('/',
    [
        check('email ', 'Por Favor Digite un email Valido').isEmail(),
        check('password', 'Por Favor Ingrese Una password Con mas de 8 caracteres').isLength({min: 8})
    ],
    createUser)
routerAuth.get('/verify',verifyToken)

routerAuth.post('/login',loginUser)

routerAuth.post('/request-password-reset',getResetPassword)
routerAuth.post('/reset-password',setNewPassword)
export default routerAuth