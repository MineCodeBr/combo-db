const { Client, REST, Routes } = require("discord.js")
const Database = require("combo-db")
const bot = new Client({ intents: 32767 })

/*
* Set database config
*/
bot.db = {
    users: new Database("users", { log: false })
}

const commands = [{
    name: 'work',
    description: 'Work template',
    run: async function(interaction) {
        const user = interaction.client.db.users.get(interaction.user.id)
        //Time work = 2min
        var time = 60000 - (Date.now() - user.times.work)

        if (time > 0) interaction.reply("Still a long time to go")
        else {
            interaction.reply("Ready")
            interaction.client.db.users.add(`${interaction.user.id}.coins`, 10)
        }
    }
}]

/*
* Register Slash Commands
*/
const rest = new REST({ version: '10' }).setToken("TOKEN-BOT");
rest.put(Routes.applicationCommands("ID-BOT"), { body: commands })
bot.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = commands.find(data => data.name == interaction.commandName)
    if (!command) return;
    if (!interaction.client.db.users.get(interaction.user.id)) interaction.client.db.users.set(interaction.user.id, { coins: 0, times: { work: 0 } })
    await command.run(interaction)
});
bot.on("ready", (b) => {
    console.log(`(${b.user.tag}) Online`)
})
bot.login("TOKEN-BOT")