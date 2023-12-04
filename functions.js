let config = require('./config.json')
const fs = require("fs")
const path = require("path")

const bot = {
    adjustActive: function(hn,current) {
        try {
            const activeBot = config.botTypes.find(bot => bot.hostname === hn);
            const indexNum = config.botTypes.indexOf(activeBot);
            config.botTypes[indexNum].active = true
        }
        catch (e) {
            console.log("ERROR: Incorrect hostname!!!!".red,hn)
            console.log(`Insert the following into "hostname" in config.json for the correct bot.`)
            console.log(`Hostname ---->>>>> ${current}`)
        }
    },
    botIdent: function() {
        const activeBot = config.botTypes.find(bot => bot.active === true);
        let inactiveBots = []
        inactiveBots.push(config.botTypes.filter(bot => bot.active === false).map(bot => bot.botName))
        return {activeBot,inactiveBots}
    },
    fileNameBotMatch: function(e) {
        let foundBotName = null;
        const stackLines = e.stack.split("\n")
        stackLines.forEach((line) => {
            const botNameMatch = line.match(bot.botIdent().inactiveBots);
            if (botNameMatch && botNameMatch.length > 0) {
                foundBotName = botNameMatch[0];
                return foundBotName
            }
        });
        return foundBotName
    },
    examplezzzzz: function() {},
    examplesssss: "SomeExampleVariable",
}

module.exports = bot