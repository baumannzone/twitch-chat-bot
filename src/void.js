// const getTwitchToken = () => {
//   const scopes = "chat:edit chat:read";
//   const baseUrl = "https://id.twitch.tv/oauth2/token";
//   const params = {
//     client_id: process.env.CLIENT_ID,
//     client_secret: process.env.CLIENT_SECRET,
//     grant_type: "client_credentials",
//     scope: scopes,
//   };
//
//   return axios.post(baseUrl, null, { params });
// };
//
// const validateToken = (token) => {
//   return axios.get("https://id.twitch.tv/oauth2/validate", {
//     headers: {
//       Authorization: `OAuth ${token}`,
//     },
//   });
// };
//
// getTwitchToken().then(({ data }) => {
//   console.log(data);
//   const { access_token } = data;
//   console.log("Access Token: ", access_token);
//
//   const client = new tmi.Client({
//     options: { debug: true, messagesLogLevel: "info" },
//     connection: {
//       reconnect: true,
//     },
//     identity: {
//       username: BOT_NAME,
//       password: access_token,
//     },
//     channels,
//   });
//
//   client
//     .connect()
//     .then((r) => {
//       console.log(r);
//     })
//     .catch((e) => {
//       console.log("SAD TIMES :(");
//       console.log(e);
//       console.log("-------------------------------------------");
//     });
//
//   client.on("message", async (channel, tags, message, self) => {
//     // Ignore messages from the bot
//     if (self) {
//       return;
//     }
//
//     client.say(channel, `@${tags["display-name"]} ha dicho: ${message}`);
//   });
//
//   // validateToken(access_token)
//   //   .then((res) => {
//   //
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //   });
// });
