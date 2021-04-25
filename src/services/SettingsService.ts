import { getCustomRepository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";


interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingsService {
    async create({ chat, username }: ISettingsCreate): Promise<Setting> {
        const settingsRepository = getCustomRepository(SettingsRepository);

        const settings = settingsRepository.create({
            chat,
            username,
        });

        await settingsRepository.save(settings);
        return settings;
    }
}

export { SettingsService }