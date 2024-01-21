import prismaClient from "../../prisma";

interface ProductRequest {
  category_id: string;
}

class ListProductsByCategoryService {
  async execute({ category_id }: ProductRequest) {
    
    const products = await prismaClient.product.findMany({
      where: {
        category_id
      },
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        banner: true,
        category_id: true,
      }
    })

    return products;
  }
}

export { ListProductsByCategoryService }