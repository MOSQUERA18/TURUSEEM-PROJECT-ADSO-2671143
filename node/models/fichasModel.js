import database from "../database/db.js";
import { DataTypes } from "sequelize";
import ProgramaModel from "./ProgramaModel.js";

const fichasModel = database.define("fichas",{
    id_ficha: {type: DataTypes.NUMBER, primaryKey: true},
    Id_Programa: {
        type: DataTypes.INTEGER,
        references:{
            model: ProgramaModel,
            key: 'Id_Programa'
        }
    },
    fecha_ini_eta_lectiva:{type: DataTypes.DATE},
    fecha_fin_eta_lectiva:{type: DataTypes.DATE},
    cantidad_aprendices: {type: DataTypes.NUMBER}

},{
    freezeTableName: true
});
export default fichasModel