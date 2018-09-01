#!/usr/bin/env node

const { getApi } = require('./utils');
const commands = require('./commands');
const config = require('./config.json');

const DEBUG = false;
const args = process.argv.slice(2)

if (DEBUG) {
  console.log(config);
  console.log(args);
  console.log(commands);
}

const [commandName] = args;

if (commands[commandName]) {
  const api = getApi(config)
    .then(api => {
      params = args.slice(1);
      const command = commands[commandName];
      try {
        command(config, api, params)
          .then(console.log)
          .catch(console.error);
      } catch (err) {
        console.error(err.message);
      }
    })
    .catch(console.error);
} else {
  commands.help();
}

