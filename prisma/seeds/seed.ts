import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const liliana = await prisma.user.upsert({
    where: { email: "liliana@archenemy.io" },
    update: {},
    create: {
      email: "liliana@archenemy.io",
      firstName: "Liliana",
      lastName: "Vess",
      password: "securepassword",
      salt: "randomsalt",
      username: "the_necromancer",
    },
  });
  const windgrace = await prisma.user.upsert({
    where: { email: "windgrace@archenemy.io" },
    update: {},
    create: {
      email: "windgrace@archenemy.io",
      firstName: "Lord",
      lastName: "Windgrace",
      password: "anothersecurepassword",
      salt: "anotherrandomsalt",
      username: "the_land_kitty",
    },
  });
  console.log({ liliana, windgrace });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e: unknown) => {
    console.error(e);
    await prisma.$disconnect();
    throw new Error(e instanceof Error ? e.message : "Unknown Error");
  });
