import { prismaClient } from "../src/prisma-client";

describe("Update Prisma Client", () => {
  test("should update data", async () => {
    const data = await prismaClient.products.update({
      data: {
        name: "Nanas",
      },
      where: {
        id: 2,
      },
    });
    expect(data.name).toBe("Nanas");
  });
});
