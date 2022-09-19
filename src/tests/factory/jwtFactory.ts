import jwt from "jsonwebtoken";
import prisma from "../../database/prismaClient";
import { authFactory, createUser } from "./userFactory";
import dotenv from "dotenv";
import { User } from "../../types/userTypes.js";

dotenv.config();

export async function jwtFactory() {
  const user = authFactory();
  await createUser(user);
  const createdUser: User = await prisma.users.findFirst({
    where: {
      email: user.email,
    },
  });
  return jwt.sign({ userId: createdUser.id }, process.env.SECRET_KEY);
}
