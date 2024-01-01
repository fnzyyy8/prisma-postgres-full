import { prismaClient } from "../src/prisma-client";

describe("Transation Prisma Client", () => {
  test("should can execute transaction", async () => {
    const [data1, data2] = await prismaClient.$transaction([
      prismaClient.products.create({
        data: {
          id: 2,
          name: "Semangka",
          description: "",
          price: 20000,
        },
      }),
      prismaClient.products.create({
        data: {
          id: 3,
          name: "Nanas",
          description: "",
          price: 27000,
        },
      }),
    ]);
    expect(data1.name).toBe("Semangka");
    expect(data2.name).toBe("Nanas");
  });
});
