// commands/transfer.js

module.exports = async function transfer(config, api, params) {
  const [from, to, amount, memo] = params;
  return api.transfer(
    from,
    to,
    `${parseFloat(amount).toFixed(4)} EOS`,
    memo || ''
  );
}

