import { Request, Response } from "express";
import { DeleteItemService } from "../../services/order/DeleteItemService";

class DeleteItemController {
  async handle(req: Request, res: Response) {
    const item_id = req.query.item_id as string

    const deleteItemService = new DeleteItemService()
    await deleteItemService.execute({ item_id })

    res.status(200).json({
      message: "Item deleted"
    })
  }
}

export { DeleteItemController }