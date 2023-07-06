import { db } from "../database/db.connection";
import {travel, updateTravel } from "../protocols";

const travels: travel[] = [

{ id: 3, destination: "Alemanha", date: 20122023, status: "Confirmado"},
{ id: 4, destination: "Belgica", date: 10122023, status: "Confirmado"},
{ id: 5, destination: "Turquia", date: 15122023, status: "Confirmado"},
{ id: 6, destination: "Brasil", date: 12122023, status: "Cancelado"}

]

export async function createTravelDB(travel: travel) {
    await db.query("INSERT INTO travels VALUES ($1);", [travels]);}

export async function travelsDB() {
    const travels = await db.query<travel>("SELECT * FROM travels;");

    return travels.rows;
}

export async function updateStatusTravelDB(travel: updateTravel) {
    return await db.query("UPDATE travels SET status = $1 WHERE id = $2;", [travel.status, travel.id]);
}

export async function deleteTravelDB(id: number) {
    return await db.query("DELETE FROM travels WHERE id = $1;", [id]);
}

