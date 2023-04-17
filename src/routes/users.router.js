import { Router } from "express";
import {methods as usersController} from "./../controllers/users.controller" ;


const router = Router();

router.get("/",usersController.getUsuarios);

export default router;