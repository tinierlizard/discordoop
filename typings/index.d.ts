import { ApplicationCommandOptionData, CommandInteraction } from "discord.js";

export class Command implements CommandData {
    constructor(data: CommandData);
    name: string;
    isNSFW: boolean;
    runContext: "USER" | "MSG" | "CHI";
    public run(int: CommandInteraction): StatusMessage;
    public init?(int: CommandInteraction): null;
}

export interface StatusMessage {
    code: string;
    message?: string;
}

export interface CommandData {
    name: string;
    isNSFW: boolean;
    runContext: "USER" | "MSG" | "CHI";
    desc: string;
    dmPermission?: boolean = false;
    options?: Array<ApplicationCommandOptionData>;
}
