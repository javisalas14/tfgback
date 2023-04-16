import { Router } from "express";

const router = Router();

router.get("/",(req,res) => {
    res.send("Respuesta Usuarios")
});

export default router;