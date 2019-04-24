const TelegramBot = require('node-telegram-bot-api');
const ogs = require('open-graph-scraper');
const firebase = require('firebase');

//Add token to a JSON file called aux
const token = "OUR_TOKEN"
const bot = new TelegramBot(token, {polling: true});

var jogadores = []

bot.onText(/\/help (.+)/, (msg, match) => {
    bot.sendMessage(msg.chat.id, 'Ola, você falou: "'+match[1]+'"')
})

bot.onText(/\/join/, (msg) => {
    console.log(JSON.stringify(msg))
    jogadores.push(msg.from.username)
    bot.sendMessage(msg.chat.id, 'Adicionando o jogador "'+msg.from.username+' ao jogo')
})

bot.onText(/\/createGame/, (msg) =>{
    jogadores = []
    bot.sendMessage(msg.chat.id,'Para criar uma partida cada jogador deve digitar /join apos isso basta digitar /startGame para iniciar')
})

bot.on('new_chat_participant', (msg) => {
    bot.sendMessage(msg.chat.id, 'Bem vindo ao Cinboia, digite /createGame para criar um jogo ou /help para saber mais')
})


bot.onText(/\/startGame/, (msg) =>{

})




