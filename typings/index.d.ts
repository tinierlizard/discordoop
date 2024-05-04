import { ApplicationCommandOptionData, Client, CommandInteraction, Events } from "discord.js";

export class Event {
    constructor(data: EventData);
    data: EventData;
    public init(client: Client): Promise<boolean>;
    public run(): StatusMessage;
}

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

export interface EventData {
    type: Events;
    init?(client: Client): Promise<boolean>;
    run?(): StatusMessage;
}