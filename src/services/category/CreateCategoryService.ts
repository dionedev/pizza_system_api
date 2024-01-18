import prismaClient from "../../prisma"

interface RequestCategory {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: RequestCategory) {

    if(name === '') {
      throw new Error("Por favor, informe um nome.")
    }

    const category = await prismaClient.category.create({
      data: {
        name: name 
      },
      select: {
        id: true,
        name: true,
      }
    })
    return category;
  }
}

export { CreateCategoryService }