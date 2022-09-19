import app from "../index.js";
import supertest from "supertest";
import prisma from "../database/prismaClient.js";
import { authFactory, createUser } from "./factory/userFactory.js";
import bcript from "bcrypt";
import { testFactory } from "./factory/testFactory.js";
import { jwtFactory } from "./factory/jwtFactory.js";

console.log(
  "Seu servidor de testes se econtra na URL: " + process.env.DATABASE_URL
);
beforeAll(async () => {
  await prisma.$transaction([
    prisma.$executeRaw`TRUNCATE TABLE users`,
    prisma.$executeRaw`TRUNCATE TABLE "teachersDisciplines" CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE terms CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE categories CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE disciplines CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE teachers CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE tests CASCADE`,
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
    await createUser({ ...user, password: bcript.hashSync(user.password, 6) });
    const result = await supertest(app).post("/signin").send(user);
    expect(result.status).toBe(200);
    expect(result.body.token).not.toBeNull();
  });

  it("Deve logar um usuário aleatório e retornar status 404", async () => {
    const user = authFactory();
    const result = await supertest(app).post("/signin").send(user);
    expect(result.status).toBe(404);
  });
});

describe("Teste de criação de novas provas", () => {
  it("Deve criar um teste e retonar status 201", async () => {
    const _test = await testFactory();
    const token = await jwtFactory();
    const result = await supertest(app).post("/insert/test").set("Authorization", `Bearer ${token}`).send(_test);
    expect(result.status).toBe(201);
  })
})
describe("Teste de get disciplinas", () => {
  it("Deve pegar todas as provas organizadas por disciplinas",  async () => {
    const token = await jwtFactory();
    const result = await supertest(app).get("/find_by_disciplines").set("Authorization", `Bearer ${token}`);;
    expect(result.body).toBeInstanceOf(Array);
  })

  it("Deve pegar todas as provas organizadas por professores",  async () => {
    const token = await jwtFactory();
    const result = await supertest(app).get("/find_by_teachers").set("Authorization", `Bearer ${token}`);
    expect(result.body).toBeInstanceOf(Array);
  })
})

beforeAll(async () => {
  prisma.$disconnect();
});