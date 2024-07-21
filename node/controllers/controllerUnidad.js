// controllers/controllerUnidad.js
import { AreaModel } from "../app.js";
import UnidadModel from "../models/UnidadModel.js";
import { Sequelize,Op } from "sequelize";

export const getAllUnidad = async (req, res) => {
    try {
        const Unidades = await UnidadModel.findAll({
            include:[{
                model:AreaModel,
                as:'areas'
            }]
            
        });
        res.json(Unidades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUnidad = async (req, res) => {
    try {
        const Unidad = await UnidadModel.findByPk(req.params.id_unidad);
        if (Unidad) {
            res.json(Unidad);
        } else {
            res.status(404).json({ message: 'Unidad no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createUnidad = async (req, res) => {
    try {
        const { id_unidad, nom_unidad, id_area } = req.body;
        const NewUnidad = await UnidadModel.create({
            id_unidad,
            nom_unidad,
            id_area
        });
        res.status(201).json(NewUnidad);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUnidad = async (req, res) => {
    try {
        const { id_unidad, nom_unidad, id_area } = req.body;
        const Unidad = await UnidadModel.update(
            {
                id_unidad,
                nom_unidad,
                id_area
            },
            {
                where: { id_unidad: req.params.id_unidad }
            }
        );
        if (Unidad[0] === 0) {
            res.status(404).json({ message: 'Unidad no encontrada' });
        } else {
            res.json({ message: 'Unidad actualizada correctamente' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUnidad = async (req, res) => {
    try {
        const Result = await UnidadModel.destroy({
            where: { id_unidad: req.params.id_unidad }
        });
        if (Result === 0) {
            res.status(404).json({ message: 'Unidad no encontrada' });
        } else {
            res.json({ message: 'Unidad eliminada correctamente' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getQueryUnidad = async (req, res) => {
    try {
        const Unidad = await UnidadModel.findAll({
            where: {
                id_unidad: {
                    [Op.like]: `%${req.params.id_unidad}%`
                }
            },
            include:[{
                model:AreaModel,
                as:'areas'
            }]
        });
        res.json(Unidad);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUnidadPDFData = async (req, res) => {
    try {
        const Unidades = await UnidadModel.findAll({
            include: {
                model: AreaModel,
                as: 'areas',
                attributes: ['nom_area'], // Incluir el nombre del área
            },
        });
        res.json(Unidades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

