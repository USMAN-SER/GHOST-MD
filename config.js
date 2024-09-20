const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "yc9RDIKD#uVprqzRpjVdBrW4rpCcuXujYkCMej91Xqhf0LMXKBOs",
MONGODB: process.env.MONGODB || "mongodb://mongo:MfPJLADhRWNHvxuOORrlmfJHboedaADB@junction.proxy.rlwy.net:57828",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/W1Stoqb.mp4",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi U S M A N Is Online Now 💻\n*💻 Owner* - GHOST-MD\n\n*💻 Owner Number* -94741140620",
SUDO_NB: process.env.SUDO_NB || "923351300389",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
