// commands/delegatebw.js

const { formatAmount } = require('../utils');
module.exports = async function delegatebw(config, api, params) {
  const { from, to, cpu, net } = params;
  return api.transaction((tx) => {
    tx.delegatebw({
      from: from,
      receiver: to,
      stake_net_quantity: formatAmount(cpu | 0),
      stake_cpu_quantity: formatAmount(net | 0),
      transfer: 0
    });
  });
}

