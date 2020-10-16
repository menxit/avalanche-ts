import * as bip39 from "bip39"
import HDKey from "hdkey"
import * as rpc from "./rpc";
import * as helpers from "./helpers"

type KeyGeneratorFunction = (index: number) => Key;

type Net = "avax" | "fuji" | "local"

interface Key {
  privateKey: Buffer;
  publicKey: Buffer;
  x: string;
  p: string;
  c: string;
}

interface OptionsKeysGenerator {
  mnemonic?: string;
  net?: Net;
  path?: string;
}

/**
 * Creates a keys generator from a mnemonic key
 * @param options
 */
export const keysGenerator = (options: OptionsKeysGenerator) => {
  const mnemonic = options.mnemonic || bip39.generateMnemonic(256);
  const net = options.net || "avax";
  const path = options.path || `m/44'/9000'/0'/0`;
  if (!bip39.validateMnemonic(mnemonic))
    throw Error("Invalid mnemonic.");
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const hd = HDKey.fromMasterSeed(seed);
  return (index: number): Key => {
    const { privateKey, publicKey } = hd.derive([path, index].join("/"));
    const address = helpers.getAddressByPublicKey(publicKey);
    return {
      privateKey: privateKey,
      publicKey: publicKey,
      x: helpers.formatAddress(net, "X", address),
      p: helpers.formatAddress(net, "P", address),
      c: helpers.formatAddress(net, "C", address),
    };
  }
}

/**
 * Retrieve x-chain outputs from a key generator.
 * @param kg
 */
export const getXOutputs = async (kg: KeyGeneratorFunction) => {
  const addresses = Array(100).fill(1).map((_, index) => kg(index).x);
  return rpc.avm.getUTXOs({ addresses, limit: 100 }).then(res => res.utxos);
}
