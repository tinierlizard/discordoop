import { ApplicationCommandOptionData, CommandInteraction } from "discord.js";

export class Command  {
    constructor(data: CommandData);
    data: CommandData;
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
    dmPermission?: boolean | undefined;
    run?(int: CommandInteraction): StatusMessage;
    init?(int: CommandInteraction): null;
    options?: Array<ApplicationCommandOptionData>;
}
