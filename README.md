# avalanche-ts

## Retrieve transaction  by id
```typescript
import { rpc } from "avalanche-ts"

const txID = "2k2ZFBdBdMGZqonGh8WHsHbKYNPHM2cAjY9etRK2vcdP5Eda4m";
rpc.avm.getTx({ txID }).then((res: any) => {
  console.log(res);
});
```

## Retrieve addresses, private key and public key by mnemonic
```typescript
import { wallet } from "avalanche-ts"

const mnemonic = "chaos zoo actress bicycle pretty sad version crush sail trim found syrup wealth employ exercise...";
const keysGenerator = wallet.keysGenerator({ mnemonic });
const index = 0;
console.log(keysGenerator(index));
```

## Calculate rewards
```typescript
import { stats } from "avalanche-ts"

stats.calculateReward({
    stakedAmount: 2000*10**9,
    durationInMs: 2592000000,
}).then(rewards => console.log({ rewards }));
```
