import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
    async create(req: Request, res: Response) {
        const { username, chat } = req.body;
        const service = new SettingsService();
        try {
            const settings = await service.create({ username, chat });
            return res.json(settings);
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }
}

export { SettingsController }