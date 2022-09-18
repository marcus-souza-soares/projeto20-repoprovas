import { faker } from "@faker-js/faker";
import { User } from "../../types/userTypes.js";
import bycrypt from "bcrypt";
import prisma from "../../database/prismaClient.js";

export function authFactory(): Omit<User, "id"> {
  return {
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}
export async function createUser(user: Omit<User, "id">) {
  return prisma.users.create({
    data: user,
  });
}
