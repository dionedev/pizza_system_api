import { Router } from "express";
import multer from "multer";
import uploadConfig from './config/multer';
import { isAuthenticated } from "./middlewares/isAuthenticated"
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductsByCategoryController } from "./controllers/product/ListProductsByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { DeleteOrderController } from "./controllers/order/DeleteOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

// USER
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailsUserController().handle)

// CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

// PRODUCT
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/product/category', isAuthenticated, new ListProductsByCategoryController().handle)

// ORDER
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new DeleteOrderController().handle)

export { router };