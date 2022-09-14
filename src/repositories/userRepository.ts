import prisma from "../database/prismaClient.js";
import { UserIsertData } from "../types/userTypes.js";

export async function createUser(data: UserIsertData) {
  await prisma.users.create({ data });
}

export async function findUserByEmail(email: string) {
  const user = await prisma.users.findUnique({
    where: {
      email,
    },
  });
  return user;
}
