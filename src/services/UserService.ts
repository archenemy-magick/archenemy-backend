import { prisma } from "@src/server";

export const UserService = {
  checkIfEmailExists: async (email: string) => {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return !!user;
  },
};
