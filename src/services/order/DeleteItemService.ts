import prismaClient from "../../prisma";

interface RequestItem {
  item_id: string;
}

class DeleteItemService {
  async execute({ item_id }: RequestItem) {
    await prismaClient.item.delete({
      where: {
        id: item_id
      }
    })
  }
}
export { DeleteItemService }