import { prismaClient } from "../src/prisma-client";

describe("Read Prisma Client", () => {
  test("should read data", async () => {
    const data = await prismaClient.products.findFirst({
      where: {
        id: 2,
      },
    });
    console.log(data);
  });
});
