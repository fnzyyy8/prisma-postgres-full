import { prismaClient } from "../src/prisma-client";

describe("Create Prisma Client", () => {
  test("should create row", async () => {
    const data = await prismaClient.products.create({
      data: {
        id: 3,
        name: "Salah",
        description: "",
        price: 100000,
      },
    });
    expect(data.id).toBe(3);
    expect(data.name).toBe("Salah");
    expect(data.price).toBe(100000);
  });
});
