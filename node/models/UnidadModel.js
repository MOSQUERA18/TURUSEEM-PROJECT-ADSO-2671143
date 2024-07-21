import database from "../database/db.js";
import { DataTypes } from "sequelize";
import areaModel from "./areaModel.js";

const unidadModel = database.define("unidad", {
    id_unidad: { type: DataTypes.INTEGER, primaryKey: true },
    nom_unidad: { type: DataTypes.STRING },
    id_area: {
        type: DataTypes.INTEGER,
        references: {
            model: areaModel,
            key: 'id_area'
        }
    }
}, {
    freezeTableName: true
});


export default unidadModel;
