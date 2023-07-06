import { travel, updateTravel } from "../protocols";
import * as travelRepository from "../repositories/travel-repository";


export async function travels() {
  
 const allTravels = await travelRepository.travelsDB();
 return allTravels;
}

export function createTravel(travel: travel) {
    return travelRepository.createTravelDB(travel);
}

export async function updateStatusTravel(travel: updateTravel) {
    const promise = await travelRepository.updateStatusTravelDB(travel);

    if (promise.rowCount === 0) {
    throw console.log("Não existe viagem com esse Id");
}}

export async function deleteTravel(id: number) {
    const promise = await travelRepository.deleteTravelDB(id);

    if (promise.rowCount === 0){
    
    throw console.log("Não existe viagem com esse Id");

    }
}
