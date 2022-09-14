import { CardInsertData, Card } from "../types/cardTypes";
import * as cardRepository from "../repositories/cardsRepository.js";
import Cryptr from "cryptr";
import dotenv from "dotenv";
dotenv.config();

export async function createCard(
  card: Omit<CardInsertData, "userId">,
  userId: number
) {
  const { title } = card;
  const cardFromDB = await cardRepository.verifyIfExists({ userId, title });
  if (cardFromDB?.title === title)
    throw { code: "NotAllowed", message: "Cartão já cadastrado!" };
  await cardRepository.createCard({
    ...card,
    ...encriptData(card.password, card.cvc),
    userId,
  });
}

export async function getCards(userId: number) {
  if (!userId) throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
  const cards: Card[] = await cardRepository.getCards(userId);
  const card_list = cards.map((card) => {
    return {
      ...card,
      ...decriptData(card.password, card.cvc),
    };
  });
  return card_list;
}

export async function getUniqueCard(userId: number, cardId: number) {
  if (!cardId) throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
  const card: Card = await cardRepository.getUniqueCard(cardId);
  if (!card)
    throw { code: "NotFound", message: "Essa credencial não existe..." };
  if (userId !== card.userId)
    throw {
      code: "NotAllowed",
      message: "Você não tem permissão de acesso a essa credencial!",
    };
  return {
    ...card,
    ...decriptData(card.password, card.cvc),
  };
}

export async function deleteCard(userId: number, cardId: number) {
  if (!cardId) throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
  const card: Card = await cardRepository.getUniqueCard(cardId);
  console.log(card)
  if (!card) throw { code: "NotFound", message: "Esse cartão não existe..." };
  if (userId !== card.userId)
    throw {
      code: "NotAllowed",
      message: "Você não tem permissão para deletar esse cartão!",
    };
  await cardRepository.deleteCard(cardId);
}

function encriptData(password: string, cvc: string): object {
  const cryptr = new Cryptr(process.env.SECRET_KEY);
  const cPassword = cryptr.encrypt(password);
  const cCvc = cryptr.encrypt(cvc);
  return {
    password: cPassword,
    cvc: cCvc,
  };
}
function decriptData(cPassword: string, cCvc: string): object {
  const cryptr = new Cryptr(process.env.SECRET_KEY);
  const password = cryptr.decrypt(cPassword);
  const cvc = cryptr.decrypt(cCvc);
  return {
    password,
    cvc,
  };
}
