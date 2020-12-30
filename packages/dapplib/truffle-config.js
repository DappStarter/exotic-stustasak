require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy rifle spike purpose inner argue success subject'; 
let testAccounts = [
"0xa6ace275ae2ab7809c41be30c7decb0c5f7210f707defa284a2137d478d99db5",
"0xa92e9caf3647d9eb5c5e17e748aaf6471209ccb59f797388cd9fd59deee2a08b",
"0xf6f3ddd8b2cc657e4e751468ae95cb165771dcc38519e67a5c4825a8b1400918",
"0x6baa8909d96fb39a1c5f552abdb8ea8add42d0e5bd9d7c401d2d8b551a845481",
"0x597a17948fcfdd4c160925e0960766460fa9126a20939d0116805505a4427e5f",
"0x0bf0b181fe2b3fb072a261da0c0eef8fb2c926314da2f1f86627c9364dc292ba",
"0x482a87b00bb0561d2852ca57ae8fd149f6c975d1b39e4909d4131c4d94571529",
"0x69c21b78a271cce2f7f9b21f36b052e768cb6f4fcd78081cfac70304fd94719f",
"0x94fe131ba66e1070ce6a2008924dde0eb74618d77cee4107c528b57a857b87ed",
"0x1b7fea06e63a2a20ad5333a97dfdfaf97ac869726daae5a18c55440c8616ec17"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
