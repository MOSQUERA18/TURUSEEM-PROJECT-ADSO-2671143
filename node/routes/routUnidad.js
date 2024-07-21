import express from 'express';
import { getAllUnidad, getUnidad, createUnidad, updateUnidad, deleteUnidad, getQueryUnidad, getUnidadPDFData } from '../controllers/controllerUnidad.js';

const routerUnidad = express.Router();

routerUnidad.get('/', getAllUnidad);
routerUnidad.get('/:id_unidad', getUnidad);
routerUnidad.post('/', createUnidad);
routerUnidad.put('/:id_unidad', updateUnidad);
routerUnidad.delete('/:id_unidad', deleteUnidad);
routerUnidad.get('/id_unidad/:id_unidad', getQueryUnidad);
routerUnidad.get('/pdf-data', getUnidadPDFData); // Endpoint para obtener los datos del PDF

export default routerUnidad;
