// commands/buyrambytes.js

module.exports = async function buyrambytes(config, api, params) {
  const [from, to, bytes] = params;
  return api.buyrambytes(
    from,
    to,
    parseInt(bytes, 10),
  );
}


