// utils.js

const Eos = require('eosjs');

async function getNewKeys() {
  const privateKey = await Eos.modules.ecc.PrivateKey.randomKey();
  const publicKey = privateKey.toPublic().toString();
  return { privateKey: privateKey.toWif(), publicKey };
}

function getApi(config) {
  const { chainId, httpEndpoint } = config;
  return Eos({
    httpEndpoint,
    chainId,
    broadcast: true,
    debug: true, // API and transactions
    sign: true,
    expireInSeconds: 60,
    keyProvider: [config.master.privateKey],
  });
}

function generateAccountNameFromAddress({ address }) {
  const accountName =
    address
      .toLowerCase()
      .replace(new RegExp('[67890]', 'g'), '')
      .substring(3, 15);
  return `${accountName}`;
}

module.exports = {
  getApi,
  getNewKeys,
  generateAccountNameFromAddress,
}
