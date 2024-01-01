import { prismaClient } from "../src/prisma-client";

describe("Delete Prisma Client", () => {
  test("should delete row", async () => {
    const data = await prismaClient.products.delete({
      where: {
        id: 3,
      },
    });
    expect(data.id).toBe(3);
    expect(data.name).toBe("Salah");
    expect(data.price).toBe(100000);
  });
});
