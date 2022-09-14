import { Request, Response } from "express";
import * as cardService from "../services/cardServices.js";

export async function createCard(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  const card = req.body;
  await cardService.createCard(card, userId);
  res.status(201).send("OK");
}

export async function getCards(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  const cards = await cardService.getCards(userId);
  res.status(200).send(cards);
}

export async function getUniqueCard(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  const cardId = Number(req.params.id);
  if (!cardId || cardId % 1 !== 0)
    return res.status(422).send("insira o id corretamente!");
  const card = await cardService.getUniqueCard(userId, cardId);
  res.status(200).send(card);
}

export async function deleteCard(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  const cardId = Number(req.params.id);
  if (!cardId || cardId % 1 !== 0)
    return res.status(422).send("insira o id corretamente!");
  await cardService.deleteCard(userId, cardId)
  res.sendStatus(200);
}
