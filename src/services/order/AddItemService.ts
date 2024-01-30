import prismaClient from "../../prisma";

interface ItemRequest {
  amount: number;
  order_id: string;
  product_id: string;
}

class AddItemService {
  async execute({ amount, order_id, product_id }: ItemRequest) {
    
    const item = prismaClient.item.create({
      data: {
        amount,
        order_id,
        product_id
      },
      select: {
        amount: true,
        order_id: true,
        product_id: true,
      }
    })

    return item;
  }
}
export { AddItemService }