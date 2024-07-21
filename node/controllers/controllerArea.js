import { unidadModel } from "../app.js";
import AreaModel from "../models/areaModel.js";

export const getAllAreas = async (req, res) =>{
    try{

        const Areas = await AreaModel.findAll()

        res.json(Areas)


    }catch (error){
        res.status(500).json({ message: error.message });
    }
}


// export const getArea = async (req, res) => {
//     try {
//         const area = await AreaModel.findAll({
//             include:[{
//                 model: unidadModel,
//                 as: 'unidades'
//             }]
//         })
//         res.json(area)
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }


