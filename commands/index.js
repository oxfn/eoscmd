// commands/index.js

module.exports = {
  buyram: require('./buyram'),
  buyrambytes: require('./buyrambytes'),
  delegatebw: require('./delegatebw'),
  newaccount: require('./newaccount'),
  refund: require('./refund'),
  transfer: require('./transfer'),
  undelegatebw: require('./undelegatebw'),
  help: () => {
    console.log(`Usage: eoscmd <command> [params ...]`);
  }
};

