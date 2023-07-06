import { Router } from "express";
import * as TravelController from "../controllers/travels-controllers"
import { validateSchema } from "../middlewares/schemaValidation";

const travelsRouter = Router();

travelsRouter.post('/createtravel',validateSchema ,TravelController.createTravel)
  
travelsRouter.get('/travels', TravelController.getTravels);
  
travelsRouter.delete('/deletetravel', TravelController.deleteTravel);

travelsRouter.put('/updatetravel', TravelController.updateStatusTravel);

export default travelsRouter;