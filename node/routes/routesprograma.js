import express from "express";
import { createPrograma, deletePrograma, getAllPrograma, getPrograma, getQueryPrograma, updatePrograma } from "../controllers/programaController.js";
const routerPrograma = express.Router()

routerPrograma.get('/', getAllPrograma)
routerPrograma.get('/:Id_Programa', getPrograma)
routerPrograma.post('/', createPrograma)
routerPrograma.put('/:Id_Programa', updatePrograma)
routerPrograma.delete('/:Id_Programa', deletePrograma)
//Consultar por nombre
routerPrograma.get('/Id_Programa/:Id_Programa', getQueryPrograma)

export default routerPrograma
