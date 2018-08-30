const { getNewKeys, getApi } = require('./utils');
const commands = require('./commands');
const config = require('./config.json');

const args = process.argv.slice(2)

console.log(config);
console.log(args);
console.log(commands);

const [commandName] = args;

if (commands[commandName]) {
  const api = getApi(config);
  const params = args.slice(1);
  const command = commands[commandName];
  command(config, api, params);
} else {
  commands.help();
}

