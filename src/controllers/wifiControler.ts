import { Request, Response } from "express";
import * as wifiService from "../services/wifiServices.js";
import { Wifi } from "../types/wifiTypes";

export async function create(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  const wifi = req.body;
  await wifiService.createWifi(userId, wifi);
  res.status(201).send("OK");
}
export async function getUnique(req: Request, res: Response){
  const userId: number = res.locals.user.id;
  const wifiId = Number(req.params.id);
  if(!wifiId || wifiId % 1 !== 0) return res.status(422).send("insira o id corretamente!");
  const wifi = await wifiService.getUniqueWifi(userId, wifiId);
  return res.status(200).send(wifi);
}

export async function getAll(req: Request, res: Response){
  const userId: number = res.locals.user.id;
  const wifis: Wifi[] = await wifiService.getWifis(userId);
  return res.status(200).send(wifis);
}

export async function deleteWifi(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  const wifiId = Number(req.params.id);
  if(!wifiId || wifiId % 1 !== 0) return res.status(422).send("insira o id corretamente!");
  await wifiService.deleteWifi(userId, wifiId);
  res.sendStatus(200);
}