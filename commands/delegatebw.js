// commands/delegatebw.js

module.exports = async function delegatebw(config, api, params) {
  const { from, to, cpu, net } = params;
  return api.transaction((tx) => {
    tx.delegatebw({
      from: from,
      receiver: to,
      stake_net_quantity: '0.1000 EOS',
      stake_cpu_quantity: '0.1000 EOS',
      transfer: 0
    });
  });
}

