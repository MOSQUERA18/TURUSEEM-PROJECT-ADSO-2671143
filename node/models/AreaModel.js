import database from "../database/db.js";
import { DataTypes } from "sequelize";

const AreaModel = database.define("area",{
    id_area: {type: DataTypes.NUMBER, primaryKey: true, autoIncrement:false},
    nom_area: {type: DataTypes.STRING}

},{
    freezeTableName: true
});
export default AreaModel