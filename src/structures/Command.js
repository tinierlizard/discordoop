/**
 * Represents a command.
 */
class Command {
    constructor(CommandData) {
        this.name = CommandData.name;
        this.nsfw = CommandData.isNSFW;
        this.runContext = CommandData.runContext;
    }
}

module.exports = Command;
