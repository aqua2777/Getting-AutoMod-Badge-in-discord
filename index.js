let { Client } = require('discord.js')

let config = require('./config.json')
let createRules = require('./createRules.js')

let client = new Client({
    intents: 1
})

client.on('ready', async () => {
    let guilds = config.guilds.map( id => {
        if(!client.guilds.cache.get(id)) throw new Error(`Guild ${id} not found`)
        return client.guilds.cache.get(id)
    } )

    console.log(`Creating rules for ${guilds.length} servers...`)

    let count = 0;
    for(let i = 0; i < guilds.length; i++) {

        let guild = guilds[i]
        console.log(`Server #${i+1} ${guild.name} (${guild.id})`)
        
        console.log('Creating rules...')
        count += await createRules(guild);
        console.log(`Rules created`)
    }

    console.log(`Creating rules completed. Created ${count} rules.`)
})

client.login(config.token)