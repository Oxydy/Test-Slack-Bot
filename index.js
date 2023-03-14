require('dotenv').config();

const { App } = require("@slack/bolt");

const app = new App({
    token: process.env.SLACK_APP_BOT_TOKEN,
    signingSecret: process.env.SLACK_APP_SIGNING_SECRET
});

app.message('hello', async ({ message, say }) => {
    await say('Hello, <@${message.user}>');
});

(async () => {
    const port = 3000
    console.log('started');
    await app.start(process.env.PORT || port);
})();
