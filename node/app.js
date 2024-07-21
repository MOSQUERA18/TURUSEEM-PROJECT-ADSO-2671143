import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

import database from "./database/db.js"
import fichasRoutes from "./routes/routes.js"
import routerUnidad from './routes/routUnidad.js';
import routArea from './routes/routArea.js';
import routerPrograma from './routes/routesprograma.js';
import routerAuth from './routes/routerAuth.js';

import AreaModel from './models/areaModel.js';
import unidadModel from './models/UnidadModel.js';
import ProgramaModel from './models/ProgramaModel.js';
import fichasModel from './models/fichasModel.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use('/fichas', fichasRoutes)
app.use('/unidad', routerUnidad)
app.use('/area',routArea)
app.use('/programa',routerPrograma)
app.use('/auth',routerAuth)


//configurar express para que pueda servir los archivos estaticos desde el directorio de cargas
app.use('/public/uploads/',express.static('public,uploads/'))

//establecer carpeta para variables de entorno con dotenv
dotenv.config({path: './env/.env'})


try{
    await database.authenticate()
    console.log("CONEXION EXITOSAAA A LA DB")
}catch(error){
    console.log("ERROR DE CONEXION A LA DB : ${error}")
}

app.get('/',(req,res)=>{
    res.send('HOLA MUNDO')
})

app.listen(3000,()=>{
    console.log('server Up running in http://localhost:3000')
})

AreaModel.hasMany(unidadModel, { foreignKey: 'id_area', as: 'unidades' });
unidadModel.belongsTo(AreaModel, { foreignKey: 'id_area', as: 'areas' });

AreaModel.hasMany(ProgramaModel,{foreignKey: 'id_area', as: 'programaformacion'})
ProgramaModel.belongsTo(AreaModel,{foreignKey: 'id_area', as: 'areas'})

ProgramaModel.hasMany(fichasModel,{foreignKey:'Id_Programa', as: 'fichas'})
fichasModel.belongsTo(ProgramaModel,{foreignKey: 'Id_Programa', as: 'Programas'})

export {AreaModel,unidadModel}
export {ProgramaModel,fichasModel}
