import prisma from "../database/prismaClient.js";
import { User } from "../types/userTypes.js";

export async function createUser(data: Omit<User, "id">) {
  await prisma.users.create({ data });
}

export async function findUserByEmail(email: string) {
  const user: User = await prisma.users.findUnique({
    where: {
      email,
    },
  });
  return user;
}