import { Request, Response } from "express";
import httpStatus from "http-status";
import * as travelService from "../service/travel-service";
import { travel, updateTravel } from "../protocols";


export async function getTravels(req: Request, res: Response) {
    const allTravels = await travelService.travels();
    res.status(httpStatus.OK).send(allTravels);
}

export async function updateStatusTravel(req: Request, res: Response) {

    const updateStatus = req.body as updateTravel;

    await travelService.updateStatusTravel(updateStatus);

    res.status(httpStatus.OK).send("Status do vôo foi alterado");
}

export async function deleteTravel(req: Request, res: Response) {
    const id = req.body.id as number;

    await travelService.deleteTravel(id);
    res.status(httpStatus.OK).send("Viagem deletada com sucesso");
}

export async function createTravel(req: Request, res: Response) {
    const createNewTravel = req.body as travel

    await travelService.createTravel(createNewTravel);
    res.status(httpStatus.OK).send("Criado com sucesso");

}
