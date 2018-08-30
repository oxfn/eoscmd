// commands/undelegatebw.js

module.exports = async function undelegatebw(config, api, params) {
  const [from, to, cpu, net] = params;
  const cpu_q = cpu ? `${parseFloat(cpu).toFixed(4)} EOS` : '0.1000 EOS';
  const net_q = net ? `${parseFloat(net).toFixed(4)} EOS` : '0.1000 EOS';
  return api.transaction((tx) => {
    tx.undelegatebw({
      from: from,
      receiver: to,
      unstake_net_quantity: net_q,
      unstake_cpu_quantity: cpu_q,
    });
  });
}

