import { text } from 'express'
import nodeMailer from 'nodemailer'

export const transportador = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'sarmientomarlon452@gmail.com',
        pass:'1070593778'
    }
})

export const sendPasswordResetEmail = async(email,tokenForPassword)=>{

    const RESET_URL = `http://localhost:5173/reset-password?llave=${tokenForPassword}`
    const mailOptions = {
        from : 'sarmientomarlon452@gmail.com',
        to: email,
        subject: 'Reestablecer Contraseña',
        text: `Por Favor use el siguiente enlace para reestablecer su contraseña: ${RESET_URL}`
    }
    await transportador.sendMail(mailOptions)
}