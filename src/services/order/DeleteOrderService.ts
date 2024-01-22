import prismaClient from "../../prisma";

interface OrderIdRequest {
  order_id: string;
}

class DeleteOrderService {
  async execute({ order_id }: OrderIdRequest) {

    await prismaClient.order.delete({
      where: {
        id: order_id
      }
    })
  }
}

export { DeleteOrderService }