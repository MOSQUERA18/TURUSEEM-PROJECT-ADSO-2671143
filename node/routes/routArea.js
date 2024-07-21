import express from "express"
import { getAllAreas } from "../controllers/controllerArea.js"

const routArea = express.Router()

routArea.get('/', getAllAreas)

export default routArea


// import express from "express";
// import { getArea, getAllAreas } from "../controllers/areaController.js";

// const routerArea = express.Router();

// routerArea.get('/', getAllAreas)
// routerArea.get('/:id', getArea);

// export default routerArea;
