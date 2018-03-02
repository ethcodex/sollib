module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  // contracts_build_directory: "./output",

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    live: {
      host: "178.25.19.88", // Random IP for example purposes (do not use)
      port: 80,
      network_id: 1,        // Ethereum public network
      // optional config values:
      // gas
      // gasPrice
      // from - default address to use for any transaction Truffle makes during migrations
      // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
      //          - function that returns a web3 provider instance (see below.)
      //          - if specified, host and port are ignored.
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      // default address to use for any transaction Truffle makes during migrations
      from: "0xf6352a2a231b6541A7c20868C5b1A518fd20B9b3",
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    }
  }
};
