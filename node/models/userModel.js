import { DataTypes } from "sequelize";
import database from "../database/db.js";


const UserModel= database.define('users',{
    name: { type: DataTypes.STRING},
    email: { type: DataTypes.STRING,unique: true, allowNull: false},
    password: { type: DataTypes.STRING,allowNull: false}
}, {
    freezeTableName:true
});

export default UserModel