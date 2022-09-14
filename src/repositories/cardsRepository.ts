import prisma from "../database/prismaClient.js";
import { CardInsertData, CardPartial } from "../types/cardTypes.js";

export async function createCard(card: CardInsertData) {
    return await prisma.cards.create({
        data: card,
    });
}

export async function verifyIfExists(data: CardPartial) {
    return await prisma.cards.findFirst({
        where: {
            ...data,
        },
    });
}

export async function getCards(userId: number) {
    return await prisma.cards.findMany({
        where: { userId },
    });
}

export async function getUniqueCard(cardId: number) {
    return await prisma.cards.findUnique({
        where: {
            id: cardId,
        },
    });
}

export async function deleteCard(cardId: number) {
    return await prisma.cards.delete({
        where: {
            id: cardId,
        },
    });
}
