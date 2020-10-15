import fetch from "node-fetch"
import { URL } from 'url'

export interface OptionsRpc {
  url: string;
}
const DEFAULT_OPTIONS_RPC = {
  url: "https://api.avax.network"
};

// {{interfaces}}

export class Rpc {

  private url: string;

  constructor (options: OptionsRpc = DEFAULT_OPTIONS_RPC) {
    this.url = options.url;
  }

  protected async fetch(options: { endpoint: string, method: string, params: any }) {
    const url = new URL(this.url);
    url.pathname = options.endpoint;
    return fetch(url.toString(), {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: options.method,
        params: { assetID: "FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z", ...options.params },
      }),
    }).then(res => {
      return res.json();
    }).then(res => {
      if(res.result) {
        return res.result;
      }
      if (res.error) {
        throw res.error;
      }
      throw Error("not found");
    });
  }

}

export const ASSET_ID_AVAX = "";