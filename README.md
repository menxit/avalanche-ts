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

const mnemonic = "chaos zoo actress bicycle pretty sad version crush sail trim found syrup wealth employ exercise sibling orange horn mail february display gasp donkey predict";
const keysGenerator = wallet.keysGenerator({ mnemonic });
const index = 0;
console.log(keysGenerator(index));
```
