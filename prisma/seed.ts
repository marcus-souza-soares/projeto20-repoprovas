import prisma from "../src/database/prismaClient.js";

async function main() {
  for (let i = 0; i < 6; i++) {
    await prisma.terms.upsert({
      where: {
        number: i,
      },
      update: {},
      create: {
        number: i,
      },
    });
  }
  const category_list = ["P1", "P2", "P3", "Projeto", "Prática", "Recuperação"];
  category_list.forEach(async (c) => {
    await prisma.categories.upsert({
      where: {
        name: c,
      },
      update: {},
      create: {
        name: c,
      },
    });
  });
  const teachers_list = [
    "Diego Pinho",
    "Bruna Hamori",
    "Lelê",
    "Frank",
    "Pedrão",
    "Marina",
  ];
  teachers_list.forEach(async (t) => {
    await prisma.teachers.upsert({
      where: {
        name: t,
      },
      update: {},
      create: {
        name: t,
      },
    });
  });
  const disciplines = [
    { name: "HTML e CSS", termId: 1 },
    { name: "JavaScript", termId: 2 },
    { name: "React", termId: 3 },
    { name: "Humildade", termId: 1 },
    { name: "Planejamento", termId: 2 },
    { name: "Autoconfiança", termId: 3 },
  ];
  disciplines.forEach(async (d) => {
    await prisma.disciplines.upsert({
      where: {
        name: d.name,
      },
      update: {},
      create: {
        ...d,
      },
    });
  });
  const teachersDisciplines = [
    { teacherId: 1, disciplineId: 1 },
    { teacherId: 1, disciplineId: 2 },
    { teacherId: 1, disciplineId: 3 },
    { teacherId: 2, disciplineId: 4 },
    { teacherId: 2, disciplineId: 5 },
    { teacherId: 2, disciplineId: 6 },
  ];
  teachersDisciplines.forEach(async (e) => {
    await prisma.teachersDisciplines.create({
      data: e,
    });
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
