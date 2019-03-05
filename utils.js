// utils.js

const Eos = require('eosjs');
const passwordPrompt = require('password-prompt');

async function getNewKeys() {
  const privateKey = await Eos.modules.ecc.PrivateKey.randomKey();
  const publicKey = privateKey.toPublic().toString();
  return { privateKey: privateKey.toWif(), publicKey };
}

async function getApi(config) {
  const { chainId, httpEndpoint } = config;
  const privateKey = config.master.privateKey || await passwordPrompt('Enter private key: ', { method: 'hide' });
  if (!privateKey || !isKeyPairValid(config.master.publicKey, privateKey)) {
    throw new Error('Private key is invalid');
  }
  return Eos({
    httpEndpoint,
    chainId,
    broadcast: true,
    debug: true,
    sign: true,
    expireInSeconds: 60,
    keyProvider: [privateKey],
  });
}

function isKeyPairValid(publicKey, privateKey) {
  try {
    return Eos.modules.ecc.privateToPublic(privateKey) === publicKey;
  } catch (err) {
    return false;
  }
}

function generateAccountNameFromAddress({ address }) {
  const accountName =
    address
      .toLowerCase()
      .replace(new RegExp('[67890]', 'g'), '')
      .substring(3, 15);
  return `${accountName}`;
}

function formatAmount(amount) {
  return `${parseFloat(amount).toFixed(4)} EOS`;
}

module.exports = {
  getApi,
  getNewKeys,
  generateAccountNameFromAddress,
  isKeyPairValid,
  formatAmount,
}

