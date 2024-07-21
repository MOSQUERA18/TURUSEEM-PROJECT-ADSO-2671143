import { Sequelize, Op } from "sequelize";
import fichasModel from "../models/fichasModel.js";
import {ProgramaModel} from "../app.js"


export const getAllFichas = async (req, res) => {
    console.log(res.data)
    try {
        const fichas = await fichasModel.findAll({
            include:[{
                model:ProgramaModel,
                as:'Programas'
            }]
        })
        res.json(fichas)
    }
    catch (error) {
        res.json({ message: error.message })
    }
}

export const getFichas = async (req, res) => {
    try {
        const Fichas = await fichasModel.findAll({
            where: { id_ficha: req.params.id_ficha }
        })
        res.json(Fichas[0])
    }
    catch (error) {
        res.json({ message: error.message })
    }
}

export const createFichas = async (req, res) => {
    try {
        await fichasModel.create(req.body)
        res.json({ "message:": " !REGISTRO CREADO EXITOSAMENTE" })
        
    }
    catch (error) {
        res.json({ message: error.message })
    }
}

export const updateFichas = async (req, res) => {
    try {
        await fichasModel.update(req.body, {
            where: { id_ficha: req.params.id_ficha }
        })

        res.json({ "message": "¡Registro actualizado correctamente!" })
    }
    catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteFichas = async (req, res) => {
    try {
        await fichasModel.destroy({
            where: { id_ficha: req.params.id_ficha }
        })

        res.json({ "message": "Registro Borrado Exitosamente" })
    }
    catch (error) {
        res.json({ message: error.message })
    }
}

export const getQueryFichas = async (req, res) => {
    try {
        const fichas = await fichasModel.findAll({
            where: {
                id_ficha: {
                    [Op.like]: `%${req.params.id_ficha}%`
                }
            },
            include:[{
                model:ProgramaModel,
                as:'Programas'
            }]
        });
        res.json(fichas);
    } catch (error) {
        res.json({ message: error.message });
    }
}