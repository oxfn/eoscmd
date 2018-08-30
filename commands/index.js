// commands/index.js

module.exports = {
  delegatebw: require('./delegatebw'),
  newaccount: require('./newaccount'),
  transfer: require('./transfer'),
  help: () => {
    console.log(`Usage: eoscmd <command> [params ...]`);
  }
};

