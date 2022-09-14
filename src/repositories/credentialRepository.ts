import prisma from "../database/prismaClient.js";
import {
  CredentialInsertData,
  CredentialPartial,
} from "../types/credentialTypes.js";

export async function create(data: CredentialInsertData) {
  await prisma.credentials.create({ data });
}

export async function verifyIfExists(data: CredentialPartial) {
  return await prisma.credentials.findFirst({
    where: {
      ...data,
    },
  });
}

export async function findManyByUserId(userId: number) {
  return prisma.credentials.findMany({
    where: {
      userId,
    },
  });
}

export async function findUniqueById(id: number) {
  return prisma.credentials.findUnique({
    where: {
      id,
    },
  });
}

export async function deleteById(id: number) {
  await prisma.credentials.delete({
    where: {
      id,
    },
  });
}
