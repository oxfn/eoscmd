// commands/transfer.js

const { formatAmount } = require('../utils');

module.exports = async function transfer(config, api, params) {
  const [from, to, amount, memo] = params;
  return api.transfer(
    from,
    to,
    formatAmount(amount),
    memo || ''
  );
}

