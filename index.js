const SteamUser = require('steam-user');
// const keep_alive = require('./keep_alive.js');

const games = [730, 440, 570];
const status = 1;

const clients = [];

for (let i = 1; ; i++) {
  const username = process.env[`username${i}`];
  const password = process.env[`password${i}`];

  if (!username || !password) break;

  const client = new SteamUser();
  clients.push(client);

  client.logOn({ accountName: username, password });

  client.on('loggedOn', () => {
    console.log(`${username} - Successfully logged on`);
    client.setPersona(status);
    client.gamesPlayed(games);
  });

  client.on('error', (err) => {
    console.error(`${username} - Error:`, err.message);
  });

  client.on('disconnected', () => {
    console.warn(`${username} - Disconnected`);
  });
}
