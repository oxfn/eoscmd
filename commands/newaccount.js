// newaccount.js

module.exports = async function registerAccount(config, api, params ) {
  const [accountName, publicKey] = params;
  return api.getKeyAccounts(publicKey).then((res) => {
    if (res.account_names.length === 0) {
      const creator = config.master.accountName;
      api.transaction((tr) => {
        tr.newaccount({
          creator,
          name: accountName,
          owner: publicKey,
          active: publicKey,
        });
        tr.buyrambytes({
          payer: creator,
          receiver: accountName,
          bytes: 4096,
        });
        tr.delegatebw({
          from: config.master.accountName,
          receiver: accountName,
          stake_net_quantity: '0.1000 EOS',
          stake_cpu_quantity: '0.1000 EOS',
          transfer: 0
        });
      });
    } else {
      return { accountName: res.account_names };
    }
    return { accountName };
  });
}

