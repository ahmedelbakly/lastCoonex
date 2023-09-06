import { Router } from 'express'
import { createUser,createUserBus } from '../controller/userController.js'
const router = Router()


// define the home page route

router.post('/user', createUser)
router.post('/userBus', createUserBus)

export default router