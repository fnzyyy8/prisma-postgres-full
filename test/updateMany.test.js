import { prismaClient } from "../src/prisma-client";

describe("Update Many data with Prisma", () => {
  test("Should update many data", async () => {
    const { count } = await prismaClient.products.updateMany({
      data: {
        description: "Promo",
      },
      where: {
        price: 20000,
      },
    });
  });
});
