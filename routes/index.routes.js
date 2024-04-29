import { Router } from 'express'

const router = Router()


router.get("/holamundo", (req, res) => {
    res.send("hola mundo desde router")
})






export default router