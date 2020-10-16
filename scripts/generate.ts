const fs = require("fs");
const path = require("path");
const { json2ts } = require('json-ts');
const nodeFetch = require("node-fetch");
const ASSET_ID_AVAX = "FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z";

Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
    var array = this;
    return [].concat.apply([],
      array.map(function(elem, i) {
        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
      })
    );
  }
});

function capitalizeFirstLetter(string) {
  string = string.charAt(0).toUpperCase() + string.slice(1);
  string = string.split("_");
  let [ first, ...rest ] = string;
  rest = rest.map(x => x.charAt(0).toUpperCase() + x.slice(1))
  return [ first, ...rest ].join("");
}

let knownParameters = {
    '{{avalanceBlockchainId}}': `"string"`,
    '{{authPassword}}': `"string"`,
    '{{avalancheUsername}}': `"string"`,
    '{{avalanchePassword}}': `"string"`,
    '{{xchainAddress}}': `"string"`,
    '{{cchainbech32address}}': `"string"`,
    '{{avaxAssetId}}': `"string"`,
    '{{privkey}}': `"string"`,
    '{{memo}}': `"string"`,
    '{{cchainAddress}}': `"string"`,
    '{{cchainPassphrase}}': `"string"`,
    '{{avalancheNodeId}}': `"string"`,
    '{{pchainAddress}}': `"string"`,
    '{{avalancheSubnetId}}': `"string"`,
    '{{customSubnetID}}': `"string"`
};
function replaceParameters(raw) {
  try {
    if (!raw) return { params: null };
    let parameters;
    parameters = raw.match(/\{\{(.*?)\}\}/g) || [];
    parameters.forEach(p => {
      if (!knownParameters[p]) {
        knownParameters[p] = "string";
        console.error(`${p} is unknown parameters`);
      }
    });
    let replacedRaw = raw;
    Object.keys(knownParameters).forEach(parameterName => {
      replacedRaw = replacedRaw.split('"'+parameterName+'"').join(knownParameters[parameterName]);
      replacedRaw = replacedRaw.split(parameterName).join(knownParameters[parameterName]);
    });
    let res = JSON.parse(replacedRaw);
    if (!res.params) res.params = null;
    if (res.params && res.params.length === 0) res.params = null;
    return res;
  } catch(e) {
    console.error(raw);
    return { params: null };
  }
}

function formatComment(str, prefix = " * ") {
  return str
    .replace("[More info]", "@url")
    .split("\n").join("")
    .trim().split(" ").chunk(8).map(x => x.join(" ")).join("\n"+prefix)
    .split(". @url").join(".\n"+prefix+"@url")
}

const getAvalanchePostmanCollection = async () => {
  const url = "https://raw.githubusercontent.com/cgcardona/avalanche-postman-collection/master/Avalanche.postman_collection.json";
  let json = await nodeFetch(url).then(res => res.json());
  json.item = [
    {
      "name": "CChain",
      "item": [
        {
            "name": "importKey",
            "request": {
              "method": "POST",
              "header": [],
              "body": {
                "mode": "raw",
                "raw": "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"avax.importKey\",\"params\":{\"username\":\"myUsername\",\"password\":\"myPassword\",\"privateKey\":\"PrivateKey-2w4XiXxPfQK4TypYqnohRL8DRNTz9cGiGmwQ1zmgEqD9c9KWLq\"}}",
                "options": {
                  "raw": {
                    "language": "json"
                  }
                }
              },
              "url": {
                "raw": "{{http}}://{{host}}:{{port}}/ext/bc/C/avax",
                "protocol": "{{http}}",
                "host": [
                  "{{host}}"
                ],
                "port": "{{port}}",
                "path": [
                  "ext",
                  "bc",
                  "C",
                  "avax"
                ]
              },
              "description": "Import private key cchain."
            },
            "response": []
        },
        {
          "name": "importAVAX",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"avax.importAVAX\",\"params\":{\"to\":\"0x4b879aff6b3d24352Ac1985c1F45BA4c3493A398\",\"sourceChain\":\"X\",\"username\":\"myUsername\",\"password\":\"myPassword\"}}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{http}}://{{host}}:{{port}}/ext/bc/C/avax",
              "protocol": "{{http}}",
              "host": [
                "{{host}}"
              ],
              "port": "{{port}}",
              "path": [
                "ext",
                "bc",
                "C",
                "avax"
              ]
            },
            "description": "Import avax from xchain to cchain."
          },
          "response": []
        },
        {
          "name": "exportAVAX",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"avax.exportAVAX\",\"params\":{\"to\":\"X-avax1wkmfja9ve3lt3n9ye4qp3l3gj9k2mz7ep45j7q\",\"amount\":5000000,\"username\":\"myUsername\",\"password\":\"myPassword\"}}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{http}}://{{host}}:{{port}}/ext/bc/C/avax",
              "protocol": "{{http}}",
              "host": [
                "{{host}}"
              ],
              "port": "{{port}}",
              "path": [
                "ext",
                "bc",
                "C",
                "avax"
              ]
            },
            "description": "Export avax from cchain to xchain."
          },
          "response": []
        },
      ],
      "description": "This API can be used for cchain atomic swaps",
      "protocolProfileBehavior": {}
    },
    ...json.item,
  ]
  return json;
}

getAvalanchePostmanCollection().then(postmaneCollection => {

  // 1. Read base file
  let result = fs.readFileSync(path.join(__dirname, "./base.ts"), "utf-8");

  const addInterfaces = (r, str) => {
    return r.replace("// {{interfaces}}", str+"\n// {{interfaces}}")
  }

  // 2. Create classes
  result = postmaneCollection.item.reduce((prev, curr) => {
    prev += `
/**
 * ${formatComment(curr.description)}
 */
export class ${curr.name} extends Rpc {
  {{${curr.name}}}
}

export const ${curr.name.toLowerCase()} = new ${curr.name}();
`
    return prev;
  }, result);

  // 3. Populate class with methods
  let used = {};
  result = postmaneCollection.item.reduce((prev, curr) => {
    used = {};
    const requestes = curr.item
      .map(i => {
        if (used[i.name]) return undefined;
        used[i.name] = true;
        let res = replaceParameters(i.request.body.raw);

        let parameters: any = "";
        let containsAssetID = false;
        if (res.params !== null) {
          let type = json2ts(JSON.stringify(res.params));
          const typeName = curr.name+capitalizeFirstLetter(i.name)+"Options"
          parameters = `options: ${typeName}`;
          type = type.replace("IRootObject", typeName);
          type = type.split(":").join("?:").split("??").join("?")
          prev = addInterfaces(prev, type);
          const types = type.split("}")
          const rootType = types[0];
          containsAssetID = /.*assetID.*/.test(rootType);
        }
        if (i.name === "buildGenesis") {
          return "";
        }
        const endpoint = i.request.url.path.join("/");
        const method = res.method;
        if (!method) {
          return "";
        }
        return `
  /**
   * ${formatComment(i.request.description, "   * ")}
   */
  ${i.name}(${parameters}) {${containsAssetID ? `\n\t\toptions.assetID = options.assetID || ASSET_ID_AVAX;` : ''}
    return this.fetch({ endpoint: "${endpoint}", method: "${method}"${parameters === '' ? ' ' : ', params: options ' }});
  }
  
`
      }).filter(x => !!x).join("\n");

    prev = prev.replace(`{{${curr.name}}}`, requestes);
    return prev;
  }, result);

  result = result.replace("// {{interfaces}}","");
  result = result.split("assetID: string;").join(`assetID?: string;`)
  console.log(result);
});
