const TelegramBot = require('node-telegram-bot-api');
const token = '5388128758:AAFh5wtR1tHkvTGUMxZiHKq5AePeun8TWOY';
const bot = new TelegramBot(token, {polling: true});

const express = require('express');
const app = express();
app.listen(process.env.PORT);
app.use(express.static('public'));

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello!');
});


// app.post('/', function(req, res) {
//   console.log('lolchik')
// })

setInterval(() => {
    console.log(`😳 I'm not sleeping! 😨`)
}, 60000);