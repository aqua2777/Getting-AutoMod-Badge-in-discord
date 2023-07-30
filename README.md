# Getting-AutoMod-Bandage-in-discord
# English 
## How to get the badge

To get the **auto-moderation** badge, your bot needs to create **100 auto-moderation rules**. The main difficulty is that only **9 rules** can be created on one server. In general, the bot will have to create rules on **12 servers**. The fact that bots can create their own servers can play into our hands. But the bot can only create servers when it has **less than 10 servers**. Therefore, in order for the bot to create **10 servers**, it must **have no servers at all**. You can kick the bot from the servers, perform this manipulation, and then invite him again, or you can simply invite him to the servers on which you want him to create these rules.



## Configuration
First, let's fill in the `config.json` file here you need to insert your bot token and a list of id servers on which the rules will be created.

## Procedure
1. `npm i` Install dependencies
2. Run the first script
3. We invite the bot to specially created servers and add their id to the list
4. Run the second script
5. If during these manipulations the bot created more than 100 rules, then you will receive a badge within 24 hours.
6. After receiving the badge, the server can be deleted

## First script.
`npm run guild`
This script will create the maximum possible number of servers through the bot.
After execution, you will see in the console the number of rules created by the bot.

## Second script
`npm run start`
This script will create rules on the servers that you specified in the configuration.
After its execution, you will also see in the console the number of rules created by the bot.

# Русский
## Как получить значек

Для получения значка **автомодерации** необходимо, чтобы ваш бот создал **100 правил** автомодерации. Главная трудность в том, что на одном сервере можно создать только **9 правил**. В общем бот должен будет создать правила на **12 серверах**. Нам на руку может сыграть то, что боты умеют создавать свои сервера. Но бот может создавать сервера только тогда, когда имеет **меньше 10ти серверов**. Следовательно для того, чтобы бот создал **10 серверов**, он должен **не иметь серверов вовсе**. Вы можете выгнать бота с серверов, провернуть эту манипуляцию, а потом пригласить его заново, а можете просто пригласить его на сервера на которых вы хотите чтобы он создал эти правила. 



## Конфигурация
Для начала заполним файл `config.json` здесь необходимо вставить токен вашего бота и список id серверов, на которых будут созданы правила.

## Порядок действий
1. `npm i` Установим зависимости
2. Выполняем первый скрипт
3. Приглашаем бота на специально созданные сервера и заносим их id в список
4. Выполняем второй скрипт
5. Если в ходе этих манипуляций бот создал больше 100 правил, то значек вы получите в течении 24 часов.
6. После получения значка, сервера можно удалить

## Первый скрипт. 
`npm run guild`
Данный скрипт создаст через бота максимально возможное количество серверов.
После выполнения вы увидете в консоли количество созданных ботом правил.

## Второй скрипт
`npm run start`
Данный скрипт создаст правила на тех серверах, которые вы указали в конфигурации.
После его выполнения вы так же увидете в консоли количество созданных ботом правил.
