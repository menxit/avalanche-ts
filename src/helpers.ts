import createHash from "create-hash"
import * as bech32 from "bech32";
import * as elliptic from "elliptic";
const b58 = require('b58');

const EC: typeof elliptic.ec = elliptic.ec;
const ec: elliptic.ec = new EC('secp256k1');

export function getAddressByPublicKey(publicKey: Buffer): Buffer {
  if (publicKey.length === 65)
    publicKey = Buffer.from(ec.keyFromPublic(publicKey).getPublic(true, 'hex').padStart(66, '0'), 'hex');
  if (publicKey.length === 33) {
    const sha256:Buffer = Buffer.from(createHash('sha256').update(publicKey).digest());
    return Buffer.from(createHash('rmd160').update(sha256).digest());
  }
  throw new Error('Unable to make address.');
}

export const cb58Encode = (buffer: Buffer) => {
  const hashslice:Buffer = Buffer.from(createHash('sha256').update(buffer).digest().slice(28));
  buffer = Buffer.concat([buffer, hashslice]);
  return b58.encode(buffer);
}

export function formatAddress(hrp: string, chainid: string, bytes: Buffer) {
  return `${chainid}-${bech32.encode(hrp, bech32.toWords(bytes))}`;
}