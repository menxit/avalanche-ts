import { rpc, wallet, stats } from '../src'

(async function main() {

  const tx = await rpc.avm.getTx({ txID: "2k2ZFBdBdMGZqonGh8WHsHbKYNPHM2cAjY9etRK2vcdP5Eda4m" });
  console.log({ tx });

  const mnemonic = "chaos zoo actress bicycle pretty sad version crush sail trim found syrup wealth employ exercise sibling orange horn mail february display gasp donkey predict";
  const keysGenerator = wallet.keysGenerator({ mnemonic });
  const keys = Array(10).fill(0).map((_, index) => keysGenerator(index));
  console.log(keys);

  const xOutputs = await wallet.getXOutputs(keysGenerator);
  console.log({ xOutputs });

  const rewards = await stats.calculateReward({
    stakedAmount: 2000*10**9,
    durationInMs: 2592000000,
  });
  console.log({ rewards });

  const ethBlock = await rpc.evm.eth_getBlockByHash([
    "0x15861adf05446c1f714aeb5cc4d6510990270b5715246bbc62352cb461d2a726",
    true
  ]);
  console.log({ ethBlock });

  rpc.cchain.setProvider("http://avalanchego.api.avascan.info");
  const atomicTransaction = await rpc.cchain.getAtomicTxByBlockHeight({
    height: "0172"
  });
  console.log({ atomicTransaction });

})();
