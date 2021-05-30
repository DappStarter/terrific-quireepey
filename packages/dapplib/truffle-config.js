require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remind concert harvest nasty flock throw'; 
let testAccounts = [
"0xc0fa4fae925641ee19cd70c40bd5cdf9032191d36faced75b157b643243c8e84",
"0x8c2ebf08f56877f8be53051983b72b668726a181f83ac4c2991725e392203298",
"0x04ec7daed41d0bdf452c7e042b9fb4c3a6e65a3af410856934b98e2e99f0e718",
"0xeb489be9b36a27ee06ed40e9e033e388e363f4b42b21db7ee05e9fefef83f0fe",
"0xd51caa3933d2f98d095433459c54130adab5f031d5d19da141d30f4af60f93f2",
"0x2b0996aa70bc7a7e2b2cf1204cebe51be9bc89986a3c829022a7e2bc13484b5f",
"0xc174f41c3ec8008d7b88713c3dd88784a7489ee8e97baac0c7ab65e92d3228ad",
"0xcacc3b1322eb8cfa202e4b32231be7097ecc9f591a53283f0caa7a586948f29b",
"0x15d2c91d723e65c89b66ba30d19ecce52ce668081ca2ff8e5a621951ec7dcee3",
"0xebf5d330d35a11fd4783ea532cc939279dc80b6499ad1eab49a5a46c7372f048"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

