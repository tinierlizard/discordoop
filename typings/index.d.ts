import { ApplicationCommandOptionData, Client, ClientEvents, CommandInteraction } from "discord.js";

// Classes
export class Event {
    constructor(data: EventData);
    data: EventData;
    public init(client: Client): Promise<boolean>;
    public run(any): void;
}

export class Command  {
    constructor(data: CommandData);
    data: CommandData;
    public run(int: CommandInteraction): Promise<StatusMessage>;
    public init?(int: CommandInteraction): null;
}

// Interfaces
export interface StatusMessage {
    code: string;
    message?: string;
}

// Data Structures
export interface CommandData {
    name: string;
    isNSFW: boolean;
    commandType: "USER" | "MSG" | "CHI";
    desc: string;
    guildID?: string;
    dmPermission?: boolean | undefined;
    integrationTypes: Array<IntegrationTypes>,
    contextTypes: Array<ContextTypes>,
    run?(int: CommandInteraction): Promise<StatusMessage>;
    init?(int: CommandInteraction): null;
    options?: Array<ApplicationCommandOptionData>;
}

export interface EventData {
    type: keyof ClientEvents;
    client?;
    init?(client: Client): Promise<boolean>;
    run?(any): void;
}

// Enums
export const enum IntegrationTypes {
    "GUILD" = 0,
    "USER" = 1
}

export const enum ContextTypes {
    "GUILD" = 0,
    "BOT_DM" = 1,
    "PRIV_CHAN" = 2,
}