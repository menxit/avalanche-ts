import { avm } from '../src'

avm.getTx({ txID: "2k2ZFBdBdMGZqonGh8WHsHbKYNPHM2cAjY9etRK2vcdP5Eda4m" }).then((res: any) => {
  console.log(res);
});
