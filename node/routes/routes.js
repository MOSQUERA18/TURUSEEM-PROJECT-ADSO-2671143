import express from "express";
import { createFichas,getAllFichas,getFichas,getQueryFichas,updateFichas,deleteFichas} from "../controllers/fichascontroller.js"

const router = express.Router()

router.get('/', getAllFichas)
router.get('/:id_ficha', getFichas)
router.post('/', createFichas)
router.put('/:id_ficha', updateFichas)
router.delete('/:id_ficha', deleteFichas)
router.get('/id_ficha/:id_ficha',getQueryFichas)

export default router