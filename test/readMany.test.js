import { prismaClient } from "../src/prisma-client";

describe("Read Prisma Client", () => {
  it("should get many data", async () => {
    const products = await prismaClient.products.findMany({});

    expect(products.length).toBe(6);
    console.log(products);
  });
});
