import { rpc, wallet, stats } from '../src'

(async function main() {

  const tx = await rpc.avm.getTx({ txID: "2k2ZFBdBdMGZqonGh8WHsHbKYNPHM2cAjY9etRK2vcdP5Eda4m" });
  console.log({ tx });

  const mnemonic = "chaos zoo actress bicycle pretty sad version crush sail trim found syrup wealth employ exercise sibling orange horn mail february display gasp donkey predict";
  const keysGenerator = wallet.keysGenerator({ mnemonic });
  const keys = Array(10).fill(0).map((_, index) => keysGenerator(index));
  console.log({ keys });

  const xOutputs = await wallet.getXOutputs(keysGenerator);
  console.log({ xOutputs });

  const rewards = await stats.calculateReward({
    stakedAmount: 2000*10**9,
    durationInMs: 2592000000,
  });
  console.log({ rewards });

})();
