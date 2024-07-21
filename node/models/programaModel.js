import db from "../database/db.js";
import { DataTypes } from "sequelize";
import AreaModel from "./areaModel.js";

const ProgramaModel = db.define('programaformacion', {
    Id_Programa: { type: DataTypes.NUMBER, primaryKey: true, allowNull: false },
    Nom_Programa: { type: DataTypes.STRING },
    Tip_Programa: { type: DataTypes.CHAR },
    id_area: {
        type: DataTypes.INTEGER,
        references: {
            model: AreaModel,
            key: 'id_area'
        }
    }
}, {
    freezeTableName: true
}
)

export default ProgramaModel