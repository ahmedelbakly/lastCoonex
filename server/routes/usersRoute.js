import { Router } from 'express'
import { createUser, createUserBus, updateUser, updateUserImage,loginUser,createRefreshToken } from '../controller/userController.js'
const router = Router()
import { upload } from "../multer.js"


// define the home page route

router.post('/user', createUser)
router.post('/user/login', loginUser)
router.post('/userBus', createUserBus)
router.patch('/user', updateUser)
router.post('/refreshToken', createRefreshToken)
router.post('/user/avatar', upload.single("img"), updateUserImage)

export default router