let { Client } = require('discord.js')

let config = require('./config.json')
let createRules = require('./createRules.js')

let client = new Client({
    intents: 1
})

client.on('ready', async () => {
    let guildCount = client.guilds.cache.size;

    let countToCreate = 10 - guildCount;

    if(countToCreate <= 0) return console.log('No servers to create')

    console.log(`Creating ${countToCreate} servers...`)

    let count = 0;
    for(let i = 0; i < countToCreate; i++) {

        let guild = await client.guilds.create({
            name: 'auto-moderation-rules',
        })
        console.log(`Server created #${i+1} ${guild.name} (${guild.id})`)
        
        console.log('Creating rules...')
        count += await createRules(guild);
        console.log(`Rules created`)
    }

    console.log(`Creating servers completed. Created ${count} rules.`)
})

client.login(config.token)