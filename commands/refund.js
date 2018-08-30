// commands/delegatebw.js

module.exports = async function refund(config, api) {
  return api.transaction((tx) => {
    tx.refund({
      owner: config.master.accountName,
    });
  });
}

