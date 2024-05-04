import { ApplicationCommandOptionData, CommandInteraction } from "discord.js";

export class Event {
    constructor(data: EventData);
    init(): Promise<boolean>;
    run(): Promise<boolean>;
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
    type: Event;
    init?(): Promise<boolean>;
    run?(): Promise<boolean>;
}