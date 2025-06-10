import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();
const userController = new UserController();

router.post('/login', (req, res) => userController.getUser(req, res));  // ✅ Corrección: usamos `POST`
router.post('/register', (req, res) => userController.addUser(req, res));  // ✅ Corrección: usamos `POST`

export default router;
