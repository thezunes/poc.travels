import express, {Request, Response, json } from "express";   
import travelsRouter from "./routers/travels";
 

const app = express();

app.use(json(), travelsRouter);

app.get("/health", (req: Request, res: Response) => {

res.sendStatus(200)

});



const port: number = parseInt (process.env.port) || 5000;
app.listen(port, () => { console.log ("Server is running")})

