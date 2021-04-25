import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {
    async create(req: Request, res: Response): Promise<Response> {
        const usersService = new UsersService();
        const { email } = req.body;
        const user = await usersService.create(email);
        return res.json(user);
    }
}

export { UsersController }