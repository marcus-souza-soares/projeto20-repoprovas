import app from "../../src/index.js";
import supertest from "supertest";
import prisma from "../database/prismaClient.js";
import { authFactory, createUser } from "./factory/userFactory.js";
import bcript from "bcrypt"
import { faker } from "@faker-js/faker";

beforeEach(async () => {
  await prisma.$transaction([
    prisma.$executeRaw`TRUNCATE TABLE users`,
    prisma.$executeRaw`TRUNCATE TABLE categories CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE tests CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE disciplines CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "teachersDisciplines" CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE terms CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE teachers CASCADE`,
  ]);
});

describe("Testes de autenticação", () => {
  it("Deve criar um usuário e retornar status 201", async () => {
    const user = authFactory();
    const result = await supertest(app).post("/signup").send(user);
    const userFromDB = await prisma.users.findFirst({
      where: {
        email: user.email,
      },
    });
    expect(result.status).toBe(201);
    expect(userFromDB).not.toBeNull();
  });
  it("Deve logar um usuário existente e retornar status 200", async () => {
    const user = authFactory();
    await createUser({...user, password: bcript.hashSync(user.password, 6)});
    const result = await supertest(app).post("/signin").send(user);
    expect(result.status).toBe(200);
  })

  it("Deve logar um usuário aleatório e retornar status 404", async () => {
    const user = authFactory();
    const result = await supertest(app).post("/signin").send(user);
    expect(result.status).toBe(404);
  })
});
