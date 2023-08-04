const { config } = require('dotenv');

const result = config();
if (result.error) {
    throw result.error;
}

const configEnv = {
    private_key: process.env.PrivateKey.toString(),
    contract: {
        ethermon_data: process.env.EthermonData.toString(),
        ethermon_monster_token: process.env.EthermonMonsterToken.toString(),
        ethermon_update: process.env.EthermonUpdate.toString(),
        ethermon_token: process.env.EthermonToken.toString(),
        ethermon_processor: process.env.EthermonProcessor.toString(),
        ethermon_world: process.env.EthermonWorld.toString(),
        ethermon_world_nft: process.env.EthermonWorldNFT.toString(),
        ethermon_transform_data: process.env.EthermonTransformData.toString(),
        ethermon_transform_setting: process.env.EthermonTransformSetting.toString(),
        ethermon_transform: process.env.EtheremonTransform.toString(),
        ethermon_trade: process.env.EthermonTrade.toString(),
        ethermon_claim: process.env.EthermonClaim.toString(),
    },
    rpc_url: process.env.RPC_URL.toString()
};


module.exports = { configEnv };