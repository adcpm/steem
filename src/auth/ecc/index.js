import {Config} from "../../config";
const defaultConfig = require('../../../config.json');

const config = new Config(defaultConfig);



module.exports = {
    Address: require("./src/address"),
    Aes: require("./src/aes"),
    PrivateKey: require("./src/key_private"),
    PublicKey: require("./src/key_public"),
    Signature: require("./src/signature"),
    brainKey: require("./src/brain_key"),
    key_utils: require("./src/key_utils"),
    hash: require("./src/hash"),
    ecc_config: config
}
