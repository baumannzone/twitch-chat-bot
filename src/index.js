// const axios = require("axios");
const tmi = require("tmi.js");

require("dotenv").config();

const BOT_NAME = "botmannzone";
const BAUMANNZONE = "baumannzone";
const GUIDESMITHS = "guidesmiths";

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    reconnect: true,
  },
  identity: {
    username: BOT_NAME,
    password: process.env.TA_BOT_ACCESS_TOKEN,
  },
  channels: [BAUMANNZONE, GUIDESMITHS],
});

const commands = {
  [GUIDESMITHS]: {
    topic: {
      response: `Agenda: 
    💊 ".NET Pill" by Kamran Poursohrab (EN) -
    💬 "IT restart" by Sofía Sánchez (ES) -
    🙏 "God's questions" by Clara Dios (ES) -
    💬 "Digitalization in the Publishing world" by Linda de Leeuw (EN) -
    😎 "Data Science tour" - Rabadán - ES`,
    },
    gs: {
      response: "https://www.guidesmiths.com/",
    },
    dcsl: {
      response: "https://www.dcsl.com/",
    },
  },
};

const greetings = [
  "hola",
  "hey",
  "hi",
  "hello",
  "hola!",
  "hey!",
  "hi!",
  "hello!",
];

client.connect().catch(console.error);

// Register our event handlers (defined below)
client.on("connected", (addr, port) => {
  console.log(`* Connected to ${addr}:${port}`);
});

/**
 *
 * @param message
 * @param channel
 * @param context
 */
const checkGrettings = ({ message, channel, context }) => {
  if (greetings.includes(message.toLowerCase())) {
    client.say(channel, `${message}, @${context.username} HeyGuys`);
  }
};

client.on("message", async (channel, context, message, self) => {
  // Ignore messages from the bot
  if (self) {
    return;
  }

  console.log({ message });
  console.log({ context });

  if (message.startsWith("!")) {
    // Check commands
  } else {
    checkGrettings({ message, channel, context });
  }
});
