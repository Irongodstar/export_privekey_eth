const Wallet = require('ethereumjs-wallet'),
      fs = require('fs');


const keystoreFile = "./keystore/keystore_filename"
const password = "password"


const myWallet = Wallet.fromV3(fs.readFileSync(keystoreFile).toString(), password, true);

console.log("Private Key: " + myWallet.getPrivateKey().toString('hex')) 
console.log("Address: " + myWallet.getAddress().toString('hex')) 