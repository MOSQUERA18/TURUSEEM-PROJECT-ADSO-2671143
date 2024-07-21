// authController.js
import bcryptjs from 'bcryptjs'
import UserModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { sendPasswordResetEmail } from '../servicios/emailServices.js'
import { where } from 'sequelize'


export const createUser = async (req,res) => {

  try {
    const {name,email,password} = req.body

    let user = await UserModel.findOne({where: {email:email}})

    if (user){
      res.json({"message: ": "El Usuario Ya existe"})
    } else{
      let passHash = await bcryptjs.hash(password,8)

      const userOk = await UserModel.create({
      "name": name,
      "email": email,
      "password": passHash

    })
    const tokenUser = jwt.sign({user: {email: userOk.email}}, process.env.JWT_LLAVE,{expiresIn: '4h'})

    console.log("Token" + tokenUser)
    res.json({tokenUser})
  }

  }catch (error){

    res.json({"message": error})
  }

}

export const verifyToken = (req, res)=>{

  const token = req.header('Authorization').replace('Bearer ','')

  if (!token){
    res.status(401).json({message: 'acceso denegado'})
  }

  try{
    const decodificado = jwt.verify(token,process.env.JWT_LLAVE)

    req.user = decodificado
    res.status(200).json({message : 'Token Valido'})

  }catch(error){
    res.status(400).json({message: 'Token Invalido'})
  }
}

export const loginUser = async (req,res)=> {
  const {email, password} = req.body

  try{
    const userOk = await UserModel.findOne({where:{email:email}})

    if(!userOk || !bcryptjs.compareSync(password, userOk.password)){
      res.status(400).json({message: "Usuario o clave Invalidos"})
    }else{
      const tokenUser = jwt.sign({user: {email: userOk.email}},process.env.JWT_LLAVE,{expiresIn: '4h'})

      res.json({tokenUser})
    }
  }catch(error){
    res.status(500).json({message: error.message})
  }
}


export const getResetPassword = async (req,res)=>{

  const {email} = req.body

  const user = UserModel.findOne({where: {email:email}})

  if(!user){
    res.status(404).json({message: 'Usuario No Encontrado'})
  } else{

    const TokenForPassword = jwt.sign({user:{id:user.id,name : user.name,email: user.email}},process.env.JWT_LLAVE,{
      expiresIn: '30m'
    })

    await sendPasswordResetEmail(email,TokenForPassword)
    res.status(200).json({message: 'el mensaje para reestablecer contraseña fue enviado correctamente'})
  }
}

export const setNewPassword = async(req,res)=>{
  const {TokenForPassword,NewPassword} = req.body

  try{

    const Decodificado = jwt.verify(TokenForPassword,process.env.JWT_LLAVE)

    const User = await UserModel.findByPk(Decodificado.user.id)

    if(!User){
      res.status(404).json({message: 'Usuario no encontrado '})
    }else{
      let passHash = await bcryptjs.hash(NewPassword,6)

      await UserModel.update({
        password: passHash
      },{where: {id:Decodificado.user.id}})
      res.status(200).json({message: 'contraseña actualizada correctamente'})
    }

  }catch(error){
    res.status(400).json({message: 'Informacion Invalida o el iempo ha expirado'})
  }

}