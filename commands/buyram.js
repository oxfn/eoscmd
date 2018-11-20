// commands/buyram.js

const { formatAmount } = require('../utils');

module.exports = async function buyram(config, api, params) {
  const [from, to, amount] = params;
  return api.buyram(
    from,
    to,
    formatAmount(amount),
  );
}

