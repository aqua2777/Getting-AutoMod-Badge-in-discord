module.exports = async function(guild) {
    let autorules = await guild.autoModerationRules.fetch()

    let created = 0;

    let type1 = autorules.filter(rule => rule.triggerType === 1)
    let type3 = autorules.filter(rule => rule.triggerType === 3)
    let type4 = autorules.filter(rule => rule.triggerType === 4)
    let type5 = autorules.filter(rule => rule.triggerType === 5)

    let type = 1;
    for(let i = 0; i < 6 - type1.size; i++) {
        await guild.autoModerationRules.create({
            name: 'test',
            enabled: true,
            actions: [
                {
                    type: 1
                }
            ],
            eventType: 1,
            triggerType: type,
            triggerMetadata: {
                mentionTotalLimit: 1,
                mentionRaidProtectionEnabled: 1,
            },
            reason: 'test'
        })
        created++
    }

    type = 3;

    if(!type3.size) {
        await guild.autoModerationRules.create({
            name: 'test',
            enabled: true,
            actions: [
                {
                    type: 1
                }
            ],
            eventType: 1,
            triggerType: type,
            triggerMetadata: {
                mentionTotalLimit: 1,
                mentionRaidProtectionEnabled: 1,
            },
            reason: 'test'
        })
        created++
    }

    type = 4;
    if(!type4.size) {
        await guild.autoModerationRules.create({
            name: 'test',
            enabled: true,
            actions: [
                {
                    type: 1
                }
            ],
            eventType: 1,
            triggerType: type,
            triggerMetadata: {
                mentionTotalLimit: 1,
                mentionRaidProtectionEnabled: 1,
            },
            reason: 'test'
        })
        created++
    }

    type = 5;
    if(!type5.size) {
        await guild.autoModerationRules.create({
            name: 'test',
            enabled: true,
            actions: [
                {
                    type: 1
                }
            ],
            eventType: 1,
            triggerType: type,
            triggerMetadata: {
                mentionTotalLimit: 1,
                mentionRaidProtectionEnabled: 1,
            },
            reason: 'test'
        })
        created++
    }

    return created;
}