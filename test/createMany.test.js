import { prismaClient } from "../src/prisma-client";

describe("Create Many Prisma Client", () => {
  test("should create row", async () => {
    const { count } = await prismaClient.products.createMany({
      data: [
        {
          id: 4,
          name: "Jeruk",
          description: "",
          price: 8000,
        },
        {
          id: 5,
          name: "Melon",
          description: "",
          price: 32000,
        },
        {
          id: 6,
          name: "Pepaya",
          description: "",
          price: 6000,
        },
      ],
    });
    expect(count).toBe(3);
  });
});
