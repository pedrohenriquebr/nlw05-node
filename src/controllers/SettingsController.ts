import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";
class SettingsController {
    async create(req: Request, res: Response) {
        const { username, chat } = req.body;
        const service = new SettingsService();
        const settings = await service.create({ username, chat });
        return res.json(settings);
    }
}

export { SettingsController }