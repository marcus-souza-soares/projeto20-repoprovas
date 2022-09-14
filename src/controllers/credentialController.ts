import { Request, Response } from "express";
import * as credentialServices from "../services/credentialServices.js";
import { CredentialArray } from "../types/credentialTypes.js"

export async function createCredential(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  const credential = req.body;
  await credentialServices.createCredential(credential, userId);
  res.status(201).send("OK");
}
export async function getCredencialById(req: Request, res: Response){
  const userId: number = res.locals.user.id;
  const credentialId = Number(req.params.id);
  if(!credentialId || credentialId % 1 !== 0) return res.status(422).send("insira o id corretamente!");
  const credential = await credentialServices.findByCredentialId(userId, credentialId);
  return res.status(200).send(credential);
}

export async function getCredencials(req: Request, res: Response){
  const userId: number = res.locals.user.id;
  const credentials: CredentialArray = await credentialServices.findManyByUserId(userId);
  return res.status(200).send(credentials);
}

export async function deleteCredential(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  const credentialId = Number(req.params.id);
  if(!credentialId || credentialId % 1 !== 0) return res.status(422).send("insira o id corretamente!");
  await credentialServices.deleteCredential(userId, credentialId);
  res.sendStatus(200);
}