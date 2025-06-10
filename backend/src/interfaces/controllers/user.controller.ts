import { Request, Response } from 'express';
import { UserService } from '../../infrastructure/services/user.service';  


const userService = new UserService();

export class UserController {
  async getUser(req: Request, res: Response) {
    try {
      const user = await userService.getUser(req.body.email);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error al buscar usuario', error });
    }
  }

  async addUser(req: Request, res: Response) {
    try {
      const user = await userService.addUser(req.body.email);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error al registrar usuario', error });
    }
  }
}
