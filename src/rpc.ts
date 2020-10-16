import fetch from "node-fetch"
import { URL } from 'url'

export interface OptionsRpc {
  url: string;
}
const DEFAULT_OPTIONS_RPC = {
  url: "https://api.avax.network"
};

interface CChainImportKeyOptions {
    username?: string;
    password?: string;
    privateKey?: string;
}

interface CChainImportAVAXOptions {
    to?: string;
    sourceChain?: string;
    username?: string;
    password?: string;
}

interface CChainExportAVAXOptions {
    to?: string;
    amount?: number;
    username?: string;
    password?: string;
}

interface AdminAliasOptions {
    alias?: string;
    endpoint?: string;
}

interface AdminAliasChainOptions {
    chain?: string;
    alias?: string;
}

interface AdminLockProfileOptions {
}

interface AdminMemoryProfileOptions {
}

interface AdminStartCPUProfilerOptions {
}

interface AdminStopCPUProfilerOptions {
}

interface AuthNewTokenOptions {
    password?: string;
    endpoints?: string[];
}

interface AuthRevokeTokenOptions {
    password?: string;
    token?: string;
}

interface AuthChangePasswordOptions {
    oldPassword?: string;
    newPassword?: string;
}

interface AVMBuildGenesisOptions {
    genesisData?: IGenesisData;
}
interface IGenesisData {
    asset1?: IAsset1;
    asset2?: IAsset2;
}
interface IAsset1 {
    name?: string;
    symbol?: string;
    initialState?: IInitialState;
}
interface IInitialState {
    fixedCap?: IFixedCapItem[];
    variableCap?: IVariableCapItem[];
}
interface IFixedCapItem {
    amount?: number;
    address?: string;
}
interface IAsset2 {
    name?: string;
    symbol?: string;
    initialState?: IInitialState;
}
interface IVariableCapItem {
    minters?: string[];
    threshold?: number;
}

interface AVMCreateAddressOptions {
    username?: string;
    password?: string;
}

interface AVMCreateFixedCapAssetOptions {
    name?: string;
    symbol?: string;
    denomination?: number;
    initialHolders?: IInitialHoldersItem[];
    from?: string[];
    changeAddr?: string;
    username?: string;
    password?: string;
}
interface IInitialHoldersItem {
    address?: string;
    amount?: number;
}

interface AVMCreateNFTAssetOptions {
    name?: string;
    symbol?: string;
    minterSets?: IMinterSetsItem[];
    from?: string[];
    changeAddr?: string;
    username?: string;
    password?: string;
}
interface IMinterSetsItem {
    minters?: string[];
    threshold?: number;
}

interface AVMCreateVariableCapAssetOptions {
    name?: string;
    symbol?: string;
    denomination?: number;
    minterSets?: IMinterSetsItem[];
    from?: string[];
    changeAddr?: string;
    username?: string;
    password?: string;
}
interface IMinterSetsItem {
    minters?: string[];
    threshold?: number;
}

interface AVMExportAVAXOptions {
    from?: string[];
    to?: string;
    amount?: number;
    destinationChain?: string;
    changeAddr?: string;
    username?: string;
    password?: string;
}

interface AVMExportKeyOptions {
    username?: string;
    password?: string;
    address?: string;
}

interface AVMGetAllBalancesOptions {
    address?: string;
}

interface AVMGetAssetDescriptionOptions {
    assetID?: string;
}

interface AVMGetBalanceOptions {
    address?: string;
    assetID?: string;
}

interface AVMGetTxOptions {
    txID?: string;
}

interface AVMGetTxStatusOptions {
    txID?: string;
}

interface AVMGetUTXOsOptions {
    addresses?: string[];
    limit?: number;
}

interface AVMImportAVAXOptions {
    username?: string;
    password?: string;
    sourceChain?: string;
    to?: string;
}

interface AVMImportKeyOptions {
    username?: string;
    password?: string;
    privateKey?: string;
}

interface AVMIssueTxOptions {
    tx?: string;
}

interface AVMListAddressesOptions {
    username?: string;
    password?: string;
}

interface AVMMintOptions {
    amount?: number;
    assetID?: string;
    from?: string[];
    to?: string;
    minters?: string[];
    changeAddr?: string;
    username?: string;
    password?: string;
}

interface AVMMintNFTOptions {
    assetID?: string;
    payload?: string;
    from?: string[];
    to?: string;
    minters?: string[];
    changeAddr?: string;
    username?: string;
    password?: string;
}

interface AVMSendOptions {
    assetID?: string;
    amount?: number;
    from?: string[];
    to?: string;
    changeAddr?: string;
    memo?: string;
    username?: string;
    password?: string;
}

interface AVMSendMultipleOptions {
    outputs?: IOutputsItem[];
    from?: string[];
    changeAddr?: string;
    memo?: string;
    username?: string;
    password?: string;
}
interface IOutputsItem {
    assetID?: string;
    to?: string;
    amount?: number;
}

interface AVMSendNFTOptions {
    assetID?: string;
    from?: string[];
    to?: string;
    groupID?: number;
    changeAddr?: string;
    username?: string;
    password?: string;
}

type EVMEthCallOptions = any[];
interface IRootObjectItem {
    to?: string;
    data?: string;
}

type EVMEthGetBalanceOptions = string[];

type EVMEthSignTransactionOptions = IRootObjectItem[];
interface IRootObjectItem {
    from?: string;
    to?: string;
    gas?: string;
    gasPrice?: string;
    nonce?: string;
    value?: string;
}

type EVMEthGetTransactionCountOptions = string[];

type EVMEthSendRawTransactionOptions = string[];

type EVMEthGetBlockByHashOptions = (string | boolean)[];

type EVMEthGetBlockByNumberOptions = (string | boolean)[];

type EVMEthGetTransactionByHashOptions = string[];

type EVMEthGetTransactionReceiptOptions = string[];

interface EVMExportAVAXOptions {
    from?: string[];
    to?: string;
    amount?: number;
    destinationChain?: string;
    changeAddr?: string;
    username?: string;
    password?: string;
}

interface EVMExportKeyOptions {
    username?: string;
    password?: string;
    address?: string;
}

interface EVMImportAVAXOptions {
    username?: string;
    password?: string;
    sourceChain?: string;
    to?: string;
}

interface EVMImportKeyOptions {
    username?: string;
    password?: string;
    privateKey?: string;
}

type EVMPersonalNewAccountOptions = string[];

type EVMPersonalImportRawKeyOptions = string[];

type EVMPersonalUnlockAccountOptions = (string | number)[];

type EVMWeb3Sha3Options = string[];

interface InfoGetBlockchainIDOptions {
    alias?: string;
}

interface InfoGetNetworkIDOptions {
}

interface InfoGetNetworkNameOptions {
}

interface InfoGetNodeIDOptions {
}

interface InfoGetNodeVersionOptions {
}

interface InfoIsBootstrappedOptions {
    chain?: string;
}

interface InfoGetTxFeeOptions {
}

interface InfoPeersOptions {
}

interface IPCPublishBlockchainOptions {
    blockchainID?: string;
}

interface IPCUnpublishBlockchainOptions {
    blockchainID?: string;
}

interface KeystoreCreateUserOptions {
    username?: string;
    password?: string;
}

interface KeystoreDeleteUserOptions {
    username?: string;
    password?: string;
}

interface KeystoreExportUserOptions {
    username?: string;
    password?: string;
}

interface KeystoreImportUserOptions {
    username?: string;
    password?: string;
    user?: string;
}

interface PlatformVMAddDelegatorOptions {
    nodeId?: string;
    startTime?: number;
    endTime?: number;
    stakeAmount?: number;
    rewardAddress?: string;
    username?: string;
    password?: string;
}

interface PlatformVMAddValidatorOptions {
    nodeID?: string;
    startTime?: number;
    endTime?: number;
    stakeAmount?: number;
    rewardAddress?: string;
    delegationFeeRate?: number;
    username?: string;
    password?: string;
}

interface PlatformVMAddSubnetValidatorOptions {
    nodeID?: string;
    subnetID?: string;
    startTime?: number;
    endTime?: number;
    weight?: number;
    username?: string;
    password?: string;
}

interface PlatformVMCreateAddressOptions {
    username?: string;
    password?: string;
}

interface PlatformVMCreateBlockchainOptions {
    vmID?: string;
    SubnetID?: string;
    name?: string;
    genesisData?: string;
    username?: string;
    password?: string;
}

interface PlatformVMCreateSubnetOptions {
    controlKeys?: string[];
    threshold?: number;
    username?: string;
    password?: string;
}

interface PlatformVMGetBalanceOptions {
    address?: string;
}

interface PlatformVMGetBlockchainsOptions {
}

interface PlatformVMGetBlockchainStatusOptions {
    blockchainID?: string;
}

interface PlatformVMGetCurrentSupplyOptions {
}

interface PlatformVMGetCurrentValidatorsOptions {
    subnetID?: string;
}

interface PlatformVMGetHeightOptions {
}

interface PlatformVMGetMinStakeOptions {
}

interface PlatformVMGetStakeOptions {
    addresses?: string[];
}

interface PlatformVMGetTxStatusOptions {
    txID?: string;
}

interface PlatformVMGetPendingValidatorsOptions {
    subnetID?: string;
}

interface PlatformVMGetStakingAssetIDOptions {
}

interface PlatformVMGetSubnetsOptions {
}

interface PlatformVMGetTxOptions {
    txID?: string;
}

interface PlatformVMGetUTXOsOptions {
    addresses?: string[];
    sourceChain?: string;
    limit?: number;
}

interface PlatformVMExportAVAXOptions {
    to?: string;
    amount?: number;
    username?: string;
    password?: string;
}

interface PlatformVMExportKeyOptions {
    username?: string;
    password?: string;
    address?: string;
}

interface PlatformVMImportAVAXOptions {
    username?: string;
    password?: string;
    sourceChain?: string;
    to?: string;
}

interface PlatformVMImportKeyOptions {
    username?: string;
    password?: string;
    privateKey?: string;
}

interface PlatformVMIssueTxOptions {
    tx?: string;
}

interface PlatformVMListAddressesOptions {
    username?: string;
    password?: string;
}

interface PlatformVMSampleValidatorsOptions {
    size?: number;
}

interface PlatformVMValidatedByOptions {
    blockchainID?: string;
}

interface PlatformVMValidatesOptions {
    subnetID?: string;
}



export class Rpc {

  private url: string;

  constructor (options: OptionsRpc = DEFAULT_OPTIONS_RPC) {
    this.url = options.url;
  }

  protected async fetch(options: { endpoint: string, method: string, params?: any }) {
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
        params: { ...options.params },
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

export const ASSET_ID_AVAX = "FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z";

/**
 * This API can be used for cchain atomic
 * swaps
 */
export class CChain extends Rpc {
  
  /**
   * Import private key cchain.
   */
  importKey(options: CChainImportKeyOptions) {
    return this.fetch({ endpoint: "ext/bc/C/avax", method: "avax.importKey", params: options });
  }
  


  /**
   * Import avax from xchain to cchain.
   */
  importAVAX(options: CChainImportAVAXOptions) {
    return this.fetch({ endpoint: "ext/bc/C/avax", method: "avax.importAVAX", params: options });
  }
  


  /**
   * Export avax from cchain to xchain.
   */
  exportAVAX(options: CChainExportAVAXOptions) {
    return this.fetch({ endpoint: "ext/bc/C/avax", method: "avax.exportAVAX", params: options });
  }
  

}

export const cchain = new CChain();

/**
 * This API can be used for measuring node
 * health and debugging.
 * @url(https://docs.avax.network/v1.0/en/api/admin)
 */
export class Admin extends Rpc {
  
  /**
   * Assign an API an alias, a different endpoint
   * for the API. The original endpoint will still
   * work. This change only affects this node; other
   * nodes will not know about this alias.
   * @url(https://docs.avax.network/v1.0/en/api/admin/#adminalias)
   */
  alias(options: AdminAliasOptions) {
    return this.fetch({ endpoint: "ext/admin", method: "admin.alias", params: options });
  }
  


  /**
   * Give a blockchain an alias, a different name
   * that can be used any place the blockchain’s
   * ID is used.
   * @url(https://docs.avax.network/v1.0/en/api/admin/#adminaliaschain)
   */
  aliasChain(options: AdminAliasChainOptions) {
    return this.fetch({ endpoint: "ext/admin", method: "admin.aliasChain", params: options });
  }
  


  /**
   * Dump the mutex statistics of the node to
   * the specified file.
   * @url(https://docs.avax.network/v1.0/en/api/admin/#adminlockprofile)
   */
  lockProfile(options: AdminLockProfileOptions) {
    return this.fetch({ endpoint: "ext/admin", method: "admin.lockProfile", params: options });
  }
  


  /**
   * Runs a memory profile writing to the specified
   * file.
   * @url(https://docs.avax.network/v1.0/en/api/admin/#adminmemoryprofile)
   */
  memoryProfile(options: AdminMemoryProfileOptions) {
    return this.fetch({ endpoint: "ext/admin", method: "admin.memoryProfile", params: options });
  }
  


  /**
   * Start profiling the CPU utilization of the node.
   * Will write the profile to the specified file
   * on stop.
   * @url(https://docs.avax.network/v1.0/en/api/admin/#adminstartcpuprofiler)
   */
  startCPUProfiler(options: AdminStartCPUProfilerOptions) {
    return this.fetch({ endpoint: "ext/admin", method: "admin.startCPUProfiler", params: options });
  }
  


  /**
   * Stop the CPU profile that was previously started.
   * @url(https://docs.avax.network/v1.0/en/api/admin/#adminstopcpuprofiler)
   */
  stopCPUProfiler(options: AdminStopCPUProfilerOptions) {
    return this.fetch({ endpoint: "ext/admin", method: "admin.stopCPUProfiler", params: options });
  }
  

}

export const admin = new Admin();

/**
 * This API can be used for measuring node
 * health and debugging.
 * @url(https://docs.avax.network/v1.0/en/api/admin)
 */
export class Auth extends Rpc {
  
  /**
   * Creates a new authorization token that grants access
   * to one or more API endpoints. (https://docs.avax.network/v1.0/en/api/auth/#authnewtoken)
   */
  newToken(options: AuthNewTokenOptions) {
    return this.fetch({ endpoint: "ext/auth", method: "auth.newToken", params: options });
  }
  


  /**
   * Revoke a previously generated token. The given token
   * will no longer grant access to any endpoint.If
   * the token is invalid, does nothing.
   * @url(https://docs.avax.network/v1.0/en/api/auth/#authrevoketoken)
   */
  revokeToken(options: AuthRevokeTokenOptions) {
    return this.fetch({ endpoint: "ext/auth", method: "auth.revokeToken", params: options });
  }
  


  /**
   * Change this node's authorization token password. Any authorization
   * tokens created under an old password will become
   * invalid.
   * @url(https://docs.avax.network/v1.0/en/api/auth/#authchangepassword)
   */
  changePassword(options: AuthChangePasswordOptions) {
    return this.fetch({ endpoint: "ext/auth", method: "auth.changePassword", params: options });
  }
  

}

export const auth = new Auth();

/**
 * The X-Chain, Avalanche’s native platform for creating and
 * trading assets, is an instance of the Avalanche
 * Virtual Machine (AVM). This API allows clients to
 * create and trade assets on the X-Chain and
 * other instances of the AVM.
 * @url(https://docs.avax.network/v1.0/en/api/avm)
 */
export class AVM extends Rpc {
  
  /**
   * Create a new address controlled by the given
   * user.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmcreateaddress)
   */
  createAddress(options: AVMCreateAddressOptions) {
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.createAddress", params: options });
  }
  


  /**
   * Create a new fixed-cap, fungible asset. A quantity
   * of it is created at initialization and then
   * no more is ever created. The asset can
   * be sent with `avm.send`.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmcreatefixedcapasset)
   */
  createFixedCapAsset(options: AVMCreateFixedCapAssetOptions) {
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.createFixedCapAsset", params: options });
  }
  


  /**
   * Create a new non-fungible asset. No units of
   * the asset exist at initialization. Minters can mint
   * units of this asset using `mintTx` and `signMintTx`.
   * The asset can be sent with `avm.sendNFT`.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmcreatenftasset)
   */
  createNFTAsset(options: AVMCreateNFTAssetOptions) {
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.createNFTAsset", params: options });
  }
  


  /**
   * Create a new variable-cap, fungible asset. No units
   * of the asset exist at initialization. Minters can
   * mint units of this asset using `createMintTx`, `signMintTx`
   * and `issueTx`. The asset can be sent with
   * `avm.send`.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmcreatevariablecapasset)
   */
  createVariableCapAsset(options: AVMCreateVariableCapAssetOptions) {
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.createVariableCapAsset", params: options });
  }
  


  /**
   * Export AVAX from both the X-Chain to the
   * P-Chain as well as from the X-Chain to
   * the C-Chain.After calling this method, you must call
   * either the P-Chain’s `importAVAX` method or the C-Chain's
   * `importAVAX` method to complete the transfer.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmexportavax)
   */
  exportAVAX(options: AVMExportAVAXOptions) {
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.exportAVAX", params: options });
  }
  


  /**
   * Get the private key that controls a given
   * address.The returned private key can be added to
   * a user with `avm.importKey`.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmexportkey)
   */
  exportKey(options: AVMExportKeyOptions) {
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.exportKey", params: options });
  }
  


  /**
   * Get the balances of all assets controlled by
   * a given address.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmgetallbalances)
   */
  getAllBalances(options: AVMGetAllBalancesOptions) {
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.getAllBalances", params: options });
  }
  


  /**
   * Get information about an asset.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmgetassetdescription)
   */
  getAssetDescription(options: AVMGetAssetDescriptionOptions) {
		options.assetID = options.assetID || ASSET_ID_AVAX;
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.getAssetDescription", params: options });
  }
  


  /**
   * Get the balance of an asset controlled by
   * a given address.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmgetbalance)
   */
  getBalance(options: AVMGetBalanceOptions) {
		options.assetID = options.assetID || ASSET_ID_AVAX;
    return this.fetch({ endpoint: "ext/X", method: "avm.getBalance", params: options });
  }
  


  /**
   * Returns the specified transaction @url(https://docs.avax.network/v1.0/en/api/avm/#avmgetbalance)
   */
  getTx(options: AVMGetTxOptions) {
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.getTx", params: options });
  }
  


  /**
   * Get the status of a transaction sent to
   * the network.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmgettxstatus)
   */
  getTxStatus(options: AVMGetTxStatusOptions) {
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.getTxStatus", params: options });
  }
  


  /**
   * Get the UTXOs that reference a given address.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmgetutxos)
   */
  getUTXOs(options: AVMGetUTXOsOptions) {
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.getUTXOs", params: options });
  }
  


  /**
   * Finalize a transfer of AVAX from either the
   * P-Chain to the X-Chain or the C-Chain to
   * the X-Chain.Before this method is called, you must
   * call either the P-Chain’s `exportAVAX` method or the
   * C-Chain’s `exportAVAX` method to initiate the transfer.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmimportavax)
   */
  importAVAX(options: AVMImportAVAXOptions) {
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.importAVAX", params: options });
  }
  


  /**
   * Give a user control over an address by
   * providing the private key that controls the address.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmimportkey)
   */
  importKey(options: AVMImportKeyOptions) {
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.importKey", params: options });
  }
  


  /**
   * Send a signed transaction to the network.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmissuetx)
   */
  issueTx(options: AVMIssueTxOptions) {
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.issueTx", params: options });
  }
  


  /**
   * List addresses controlled by the given user.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmlistaddresses)
   */
  listAddresses(options: AVMListAddressesOptions) {
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.listAddresses", params: options });
  }
  


  /**
   * Create an unsigned transaction to mint more of
   * a variable-cap asset (an asset created with `avm.createVariableCapAsset`.)
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmcreateminttx)
   */
  mint(options: AVMMintOptions) {
		options.assetID = options.assetID || ASSET_ID_AVAX;
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.mint", params: options });
  }
  


  /**
   * Mint more of a non-fungible asset (an asset
   * created with `avm.createNFTAsset`.) @url(https://docs.avax.network/v1.0/en/api/avm/#avmmintnft)
   */
  mintNFT(options: AVMMintNFTOptions) {
		options.assetID = options.assetID || ASSET_ID_AVAX;
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.mintNFT", params: options });
  }
  


  /**
   * Send a quantity of an asset to an
   * address.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmsend)
   */
  send(options: AVMSendOptions) {
		options.assetID = options.assetID || ASSET_ID_AVAX;
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.send", params: options });
  }
  


  /**
   * Send a quantity of an asset to an
   * address.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmsend)
   */
  sendMultiple(options: AVMSendMultipleOptions) {
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.sendMultiple", params: options });
  }
  


  /**
   * Send a quantity of an asset to an
   * address.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmsend)
   */
  sendNFT(options: AVMSendNFTOptions) {
		options.assetID = options.assetID || ASSET_ID_AVAX;
    return this.fetch({ endpoint: "ext/bc/X", method: "avm.sendNFT", params: options });
  }
  

}

export const avm = new AVM();

/**
 * This document describes the API of the C-Chain,
 * which is an instance of the Ethereum Virtual
 * Machine (EVM.)Note: Ethereum has its own notion of
 * `networkID` and `chainID`. The C-Chain uses `1` and
 * `43110` for these values, obtained using the `net_version`
 * and `eth_chainId` methods shown below. These have no
 * relationship to AVA’s view of networkID and chainID,
 * and are purely internal to the C-Chain.
 * @url(https://docs.avax.network/v1.0/en/api/evm)
 */
export class EVM extends Rpc {
  
  /**
   * Getting the most recent block number.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#getting-the-most-recent-block-number)
   */
  eth_blockNumber() {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "eth_blockNumber" });
  }
  


  /**
   * Call a contract.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#call-a-contract)
   */
  eth_call(options: EVMEthCallOptions) {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "eth_call", params: options });
  }
  


  /**
   * Not well documented in JSON-RPC references. See instead
   * EIP694.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#getting-the-chain-id)
   */
  eth_chainId() {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "eth_chainId" });
  }
  


  /**
   * Getting an account’s balance.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#getting-an-accounts-balance)
   */
  eth_getBalance(options: EVMEthGetBalanceOptions) {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "eth_getBalance", params: options });
  }
  


  /**
   * Signing a transaction.This method will create a signed
   * transaction, but will not publish it automatically to
   * the network. Instead, the `raw` result output should
   * be used with `eth_sendRawTransaction` to execute the transaction.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#signing-a-transaction)
   */
  eth_signTransaction(options: EVMEthSignTransactionOptions) {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "eth_signTransaction", params: options });
  }
  


  /**
   * Getting an account’s nonce.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#getting-an-accounts-nonce)
   */
  eth_getTransactionCount(options: EVMEthGetTransactionCountOptions) {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "eth_getTransactionCount", params: options });
  }
  


  /**
   * Send a raw transaction.Example below shows a raw
   * transaction published to the network and its associated
   * transaction hash.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#send-a-raw-transaction)
   */
  eth_sendRawTransaction(options: EVMEthSendRawTransactionOptions) {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "eth_sendRawTransaction", params: options });
  }
  


  /**
   * Getting a block by hash.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#getting-a-block-by-hash)
   */
  eth_getBlockByHash(options: EVMEthGetBlockByHashOptions) {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "eth_getBlockByHash", params: options });
  }
  


  /**
   * Getting a block by number.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#getting-a-block-by-number)
   */
  eth_getBlockByNumber(options: EVMEthGetBlockByNumberOptions) {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "eth_getBlockByNumber", params: options });
  }
  


  /**
   * Getting a transaction by hash.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#getting-a-transaction-by-hash)
   */
  eth_getTransactionByHash(options: EVMEthGetTransactionByHashOptions) {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "eth_getTransactionByHash", params: options });
  }
  


  /**
   * Getting a transaction receipt.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#getting-a-transaction-receipt)
   */
  eth_getTransactionReceipt(options: EVMEthGetTransactionReceiptOptions) {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "eth_getTransactionReceipt", params: options });
  }
  


  /**
   * Send AVAX from the X-Chain to an account
   * on the P-Chain.After calling this method, you must
   * call the P-Chain’s `importAVAX` method to complete the
   * transfer.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmexportavax)
   */
  exportAVAX(options: EVMExportAVAXOptions) {
    return this.fetch({ endpoint: "ext/bc/C/avax", method: "avax.exportAVAX", params: options });
  }
  


  /**
   * Get the private key that controls a given
   * address.The returned private key can be added to
   * a user with `avm.importKey`.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmexportkey)
   */
  exportKey(options: EVMExportKeyOptions) {
    return this.fetch({ endpoint: "ext/bc/C/avax", method: "avax.exportKey", params: options });
  }
  


  /**
   * Send AVAX from the X-Chain to an account
   * on the P-Chain.After calling this method, you must
   * call the P-Chain’s `importAVAX` method to complete the
   * transfer.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmexportavax)
   */
  importAVAX(options: EVMImportAVAXOptions) {
    return this.fetch({ endpoint: "ext/bc/C/avax", method: "avax.importAVAX", params: options });
  }
  


  /**
   * Give a user control over an address by
   * providing the private key that controls the address.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmimportkey)
   */
  importKey(options: EVMImportKeyOptions) {
    return this.fetch({ endpoint: "ext/bc/C/avax", method: "avax.importKey", params: options });
  }
  


  /**
   * Getting the network ID.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#getting-the-network-id)
   */
  net_version() {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "net_version" });
  }
  


  /**
   * Creating a new account (private key generated automatically)The
   * EVM will create a new account using the
   * passphrase `cheese` to encrypt and store the new
   * account credentials. cheese is not the seed phrase
   * and cannot be used to restore this account
   * from scratch. Calling this function repeatedly with the
   * same passphrase will create multiple unique accounts. Also
   * keep in mind there are no options to
   * export private keys stored in the EVM database.
   * Users are encouraged to use wallet software instead
   * for safer account creation and backup. This method
   * is more suitable for quick account creation for
   * a testnet.
   */
  personal_newAccount(options: EVMPersonalNewAccountOptions) {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "personal_newAccount", params: options });
  }
  


  /**
   * Creating a new account (using plaintext private key).If
   * the private key is known upfront, it can
   * be provided as plaintext to load into the
   * EVM account database. For more secure account management,
   * consider using wallet software instead. The example below
   * loads the private key `0x627119bb8286874a15d562d32829613311a678da26ca7a6a785ec4ad85937d06` with the passphrase
   * `this is my passphrase`. Note that `0x` prefix
   * cannot be included in the private key argument,
   * otherwise the EVM will throw an error. The
   * example response returns the associated public key.
   */
  personal_importRawKey(options: EVMPersonalImportRawKeyOptions) {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "personal_importRawKey", params: options });
  }
  


  /**
   * Listing accounts loaded in EVM node.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#listing-accounts-loaded-in-evm-node)
   */
  personal_listAccounts() {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "personal_listAccounts" });
  }
  


  /**
   * Unlocking an account.Personal accounts loaded directly in the
   * EVM can only sign transactions while in an
   * unlocked state. The example below unlocks the listed
   * account address for 60 seconds. Note the associated
   * passphrase `cheese` must be provided for authorization.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#unlocking-an-account)
   */
  personal_unlockAccount(options: EVMPersonalUnlockAccountOptions) {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "personal_unlockAccount", params: options });
  }
  


  /**
   * Getting count of pending transactions.“Pending” transactions will be
   * non-zero during periods of heavy network use. “Queued”
   * transactions indicate transactions have been submitted with nonce
   * values ahead of the next expected value for
   * an address, which places them on hold until
   * a transaction with the next expected nonce value
   * is submitted.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#getting-count-of-pending-transactions)
   */
  txpool_status() {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "txpool_status" });
  }
  


  /**
   * Getting the current client version.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#getting-the-current-client-version)
   */
  web3_clientVersion() {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "web3_clientVersion" });
  }
  


  /**
   * Calculate a cryptographic hash.The input parameter contains hexidecimal
   * bytes of arbitrary length. The example here uses
   * the UTF-8 text string “snowstorm” converted to hexidecimal
   * bytes.
   * @url(https://docs.avax.network/v1.0/en/api/evm/#calculate-a-cryptographic-hash)
   */
  web3_sha3(options: EVMWeb3Sha3Options) {
    return this.fetch({ endpoint: "ext/bc/C/rpc", method: "web3_sha3", params: options });
  }
  

}

export const evm = new EVM();

/**
 * This API can be used for measuring node
 * health.
 * @url(https://docs.avax.network/v1.0/en/api/health)
 */
export class Health extends Rpc {
  
  /**
   * Get health check on this node.
   * @url(https://docs.avax.network/v1.0/en/api/health/#healthgetliveness)
   */
  getLiveness() {
    return this.fetch({ endpoint: "ext/health", method: "health.getLiveness" });
  }
  

}

export const health = new Health();

/**
 * This API can be used to access basic
 * information about the node.
 */
export class Info extends Rpc {
  
  /**
   * Given a blockchain’s alias, get its ID.
   * @url(https://docs.avax.network/v1.0/en/api/info/#infogetblockchainid)
   */
  getBlockchainID(options: InfoGetBlockchainIDOptions) {
    return this.fetch({ endpoint: "ext/info", method: "info.getBlockchainID", params: options });
  }
  


  /**
   * Get the ID of the network this node
   * is participating in.
   * @url(https://docs.avax.network/v1.0/en/api/info/#infogetnetworkid)
   */
  getNetworkID(options: InfoGetNetworkIDOptions) {
    return this.fetch({ endpoint: "ext/info", method: "info.getNetworkID", params: options });
  }
  


  /**
   * Get the name of the network this node
   * is participating in.
   * @url(https://docs.avax.network/v1.0/en/api/info/#infogetnetworkname)
   */
  getNetworkName(options: InfoGetNetworkNameOptions) {
    return this.fetch({ endpoint: "ext/info", method: "info.getNetworkName", params: options });
  }
  


  /**
   * Get the name of the network this node
   * is participating in.
   * @url(https://docs.avax.network/v1.0/en/api/info/#infogetnodeid)
   */
  getNodeID(options: InfoGetNodeIDOptions) {
    return this.fetch({ endpoint: "ext/info", method: "info.getNodeID", params: options });
  }
  


  /**
   * Get the version of this node.
   * @url(https://docs.avax.network/v1.0/en/api/info/#infogetnodeversion)
   */
  getNodeVersion(options: InfoGetNodeVersionOptions) {
    return this.fetch({ endpoint: "ext/info", method: "info.getNodeVersion", params: options });
  }
  


  /**
   * Check whether a given chain is done bootstrapping.
   * @url(https://docs.avax.network/v1.0/en/api/info/#infoisbootstrapped)
   */
  isBootstrapped(options: InfoIsBootstrappedOptions) {
    return this.fetch({ endpoint: "ext/info", method: "info.isBootstrapped", params: options });
  }
  


  /**
   * Get the transaction fee of the network.
   * @url(https://docs.avax.network/v1.0/en/api/info/#infogettxfee)
   */
  getTxFee(options: InfoGetTxFeeOptions) {
    return this.fetch({ endpoint: "ext/info", method: "info.getTxFee", params: options });
  }
  


  /**
   * Get description of peer connections.
   * @url(https://docs.avax.network/v1.0/en/api/info/#infopeers)
   */
  peers(options: InfoPeersOptions) {
    return this.fetch({ endpoint: "ext/info", method: "info.peers", params: options });
  }
  

}

export const info = new Info();

/**
 * The IPC API allows users to create a
 * UNIX domain socket for a blockchain to publish
 * to. When the blockchain accepts a vertex/block it
 * will publish the vertex to the socket.A node
 * will only expose this API if it is
 * started with command-line argument `api-ipcs-enabled=true`.
 * @url(https://docs.avax.network/v1.0/en/api/ipc/)
 */
export class IPC extends Rpc {
  
  /**
   * Register a blockchain so it publishes accepted vertices
   * to a Unix domain socket.
   * @url(https://docs.avax.network/v1.0/en/api/ipc/#ipcspublishblockchain)
   */
  publishBlockchain(options: IPCPublishBlockchainOptions) {
    return this.fetch({ endpoint: "ext/ipcs", method: "ipcs.publishBlockchain", params: options });
  }
  


  /**
   * Deregister a blockchain so that it no longer
   * publishes to a Unix domain socket.
   * @url(https://docs.avax.network/v1.0/en/api/ipc/#ipcspublishblockchain)
   */
  unpublishBlockchain(options: IPCUnpublishBlockchainOptions) {
    return this.fetch({ endpoint: "ext/ipcs", method: "ipcs.unpublishBlockchain", params: options });
  }
  

}

export const ipc = new IPC();

/**
 * Every node has a built-in keystore. Clients create
 * users on the keystore, which act as identities
 * to be used when interacting with blockchains. A
 * keystore exists at the node level, so if
 * you create a user on a node it
 * exists only on that node. However, users may
 * be imported and exported using this API. **You
 * should only create a keystore user on a
 * node that you operate, as the node operator
 * has access to your plaintext password.**@url(https://docs.avax.network/v1.0/en/api/keystore)
 */
export class Keystore extends Rpc {
  
  /**
   * Create a new user with the specified username
   * and password.
   * @url(https://docs.avax.network/v1.0/en/api/keystore/#keystorecreateuser)
   */
  createUser(options: KeystoreCreateUserOptions) {
    return this.fetch({ endpoint: "ext/keystore", method: "keystore.createUser", params: options });
  }
  


  /**
   * Delete a user.
   * @url(https://docs.avax.network/v1.0/en/api/keystore/#kesytoredeleteuser)
   */
  deleteUser(options: KeystoreDeleteUserOptions) {
    return this.fetch({ endpoint: "ext/keystore", method: "keystore.deleteUser", params: options });
  }
  


  /**
   * Export a user. The user can be imported
   * to another node with `keystore.importUser`. The user’s password
   * remains encrypted.
   * @url(https://docs.avax.network/v1.0/en/api/keystore/#keystoreexportuser)
   */
  exportUser(options: KeystoreExportUserOptions) {
    return this.fetch({ endpoint: "ext/keystore", method: "keystore.exportUser", params: options });
  }
  


  /**
   * Import a user. `password` must match the user’s
   * password. `username` doesn’t have to match the username
   * `user` had when it was exported.
   * @url(https://docs.avax.network/v1.0/en/api/keystore/#keystoreimportuser)
   */
  importUser(options: KeystoreImportUserOptions) {
    return this.fetch({ endpoint: "ext/keystore", method: "keystore.importUser", params: options });
  }
  


  /**
   * List the users in this keystore.
   * @url(https://docs.avax.network/v1.0/en/api/keystore/#keystorelistusers)
   */
  listUsers() {
    return this.fetch({ endpoint: "ext/keystore", method: "keystore.listUsers" });
  }
  

}

export const keystore = new Keystore();

/**
 * The API allows clients to get statistics about
 * a node’s health and performance.
 * @url(https://docs.avax.network/v1.0/en/api/metrics/)
 */
export class Metrics extends Rpc {
  
}

export const metrics = new Metrics();

/**
 * This API allows clients to interact with the
 * P-Chain (Platform Chain), which maintains Avalanche’s validator set
 * and handles blockchain creation.
 * @url(https://docs.avax.network/v1.0/en/api/platform)
 */
export class PlatformVM extends Rpc {
  
  /**
   * Add a delegator to the Default Subnet.A delegator
   * stakes AVAX and specifies a validator (the delegatee)
   * to validate on their behalf. The delegatee has
   * an increased probability of being sampled by other
   * validators (weight) in proportion to the stake delegated
   * to them.The delegatee charges a fee to the
   * delegator; the former receives a percentage of the
   * delegator’s validation reward (if any.)The delegation period must
   * be a subset of the perdiod that the
   * delegatee validates the Default Subnet.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformadddefaultsubnetdelegator)
   */
  addDelegator(options: PlatformVMAddDelegatorOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.addDelegator", params: options });
  }
  


  /**
   * Add a validator to the Default Subnet.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformadddefaultsubnetvalidator)
   */
  addValidator(options: PlatformVMAddValidatorOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.addValidator", params: options });
  }
  


  /**
   * Add a validator to a Subnet other than
   * the Default Subnet. The validator must validate the
   * Default Subnet for the entire duration they validate
   * this Subnet.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformaddnondefaultsubnetvalidator)
   */
  addSubnetValidator(options: PlatformVMAddSubnetValidatorOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.addSubnetValidator", params: options });
  }
  


  /**
   * Add a delegator to the Default Subnet.A delegator
   * stakes AVAX and specifies a validator (the delegatee)
   * to validate on their behalf. The delegatee has
   * an increased probability of being sampled by other
   * validators (weight) in proportion to the stake delegated
   * to them.The delegatee charges a fee to the
   * delegator; the former receives a percentage of the
   * delegator’s validation reward (if any.)The delegation period must
   * be a subset of the perdiod that the
   * delegatee validates the Default Subnet.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformadddefaultsubnetdelegator)
   */
  createAddress(options: PlatformVMCreateAddressOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.createAddress", params: options });
  }
  


  /**
   * Create a new blockchain. Currently only supports creation
   * of new instances of the AVM and the
   * Timestamp VM.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformcreateblockchain)
   */
  createBlockchain(options: PlatformVMCreateBlockchainOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.createBlockchain", params: options });
  }
  


  /**
   * Create an unsigned transaction to create a new
   * Subnet.The unsigned transaction must be signed with the
   * key of the account paying the transaction fee.The
   * Subnet’s ID is the ID of the transaction
   * that creates it (ie the response from `issueTx`
   * when issuing the signed transaction.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformcreatesubnet)
   */
  createSubnet(options: PlatformVMCreateSubnetOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.createSubnet", params: options });
  }
  


  /**
   * Get the balance of an asset controlled by
   * a given address.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformgetbalance)
   */
  getBalance(options: PlatformVMGetBalanceOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.getBalance", params: options });
  }
  


  /**
   * Get all the blockchains that exist (excluding the
   * P-Chain).
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformgetblockchains)
   */
  getBlockchains(options: PlatformVMGetBlockchainsOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.getBlockchains", params: options });
  }
  


  /**
   * Get the status of a blockchain.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformgetblockchainstatus)
   */
  getBlockchainStatus(options: PlatformVMGetBlockchainStatusOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.getBlockchainStatus", params: options });
  }
  


  /**
   * Returns an upper bound on the number of
   * AVAX that exist. This is an upper bound
   * because it does not account for burnt tokens,
   * including transaction fees.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformgetcurrentsupply)
   */
  getCurrentSupply(options: PlatformVMGetCurrentSupplyOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.getCurrentSupply", params: options });
  }
  


  /**
   * List the current validators of the given Subnet.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformgetcurrentvalidators)
   */
  getCurrentValidators(options: PlatformVMGetCurrentValidatorsOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.getCurrentValidators", params: options });
  }
  


  /**
   * Returns the height of the last accepted block
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformgetheight)
   */
  getHeight(options: PlatformVMGetHeightOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.getStakingAssetID", params: options });
  }
  


  /**
   * Returns the minimum stake amount @url(https://docs.avax.network/v1.0/en/api/platform/#platformgetminstake)
   */
  getMinStake(options: PlatformVMGetMinStakeOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.getMinStake", params: options });
  }
  


  /**
   * Returns the staked amount for an array of
   * addresses @url(https://docs.avax.network/v1.0/en/api/platform/#platformgetstake)
   */
  getStake(options: PlatformVMGetStakeOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.getStake", params: options });
  }
  


  /**
   * Returns the status of a platform chain transaction.
   */
  getTxStatus(options: PlatformVMGetTxStatusOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.getTxStatus", params: options });
  }
  


  /**
   * List the validators in the pending validator set
   * of the specified Subnet. Each validator is not
   * currently validating the Subnet but will in the
   * future.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformgetpendingvalidators)
   */
  getPendingValidators(options: PlatformVMGetPendingValidatorsOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.getPendingValidators", params: options });
  }
  


  /**
   * Retrieve an assetID for a subnet’s staking asset.
   * Currently this always returns the Primary Network’s staking
   * assetID.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformgetstakingassetid)
   */
  getStakingAssetID(options: PlatformVMGetStakingAssetIDOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.getStakingAssetID", params: options });
  }
  


  /**
   * Get all the Subnets that exist.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformgetsubnets)
   */
  getSubnets(options: PlatformVMGetSubnetsOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.getSubnets", params: options });
  }
  


  /**
   * Returns the specified transaction @url(https://docs.avax.network/v1.0/en/api/avm/#avmgetbalance)
   */
  getTx(options: PlatformVMGetTxOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.getTx", params: options });
  }
  


  /**
   * Get the UTXOs that reference a given address.
   * @url(https://docs.avax.network/v1.0/en/api/avm/#avmgetutxos)
   */
  getUTXOs(options: PlatformVMGetUTXOsOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.getUTXOs", params: options });
  }
  


  /**
   * Send AVAX from an account on the C-Chain
   * to an address on the X-Chain.This transaction must
   * be signed with the key of the account
   * that the AVAX is sent from and which
   * pays the transaction fee.After issuing this transaction, you
   * must call the X-Chain’s `importAVA` method to complete
   * the transfer.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformexportavax)
   */
  exportAVAX(options: PlatformVMExportAVAXOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.exportAVAX", params: options });
  }
  


  /**
   * Get the private key that controls a given
   * address.The returned private key can be added to
   * a user with `platform.importKey`.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformexportkey)
   */
  exportKey(options: PlatformVMExportKeyOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.exportKey", params: options });
  }
  


  /**
   * Complete a transfer of AVAX from the X-Chain
   * to the C-Chain.Before this method is called, you
   * must call the X-Chain’s `exportAVAX` method to initiate
   * the transfer. [More Info](https://docs.avax.network/v1.0/en/api/platform/#avmimportava)
   */
  importAVAX(options: PlatformVMImportAVAXOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.importAVAX", params: options });
  }
  


  /**
   * Give a user control over an address by
   * providing the private key that controls the address.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformimportkey)
   */
  importKey(options: PlatformVMImportKeyOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.importKey", params: options });
  }
  


  /**
   * Issue a transaction to the Platform Chain.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformissuetx)
   */
  issueTx(options: PlatformVMIssueTxOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.issueTx", params: options });
  }
  


  /**
   * List the addresses controlled by the given user.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformlistaddresses)
   */
  listAddresses(options: PlatformVMListAddressesOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.listAddresses", params: options });
  }
  


  /**
   * Sample validators from the specified Subnet.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformsamplevalidators)
   */
  sampleValidators(options: PlatformVMSampleValidatorsOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.sampleValidators", params: options });
  }
  


  /**
   * Get the Subnet that validates a given blockchain.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformvalidatedby)
   */
  validatedBy(options: PlatformVMValidatedByOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.validatedBy", params: options });
  }
  


  /**
   * Get the IDs of the blockchains a Subnet
   * validates.
   * @url(https://docs.avax.network/v1.0/en/api/platform/#platformvalidates)
   */
  validates(options: PlatformVMValidatesOptions) {
    return this.fetch({ endpoint: "ext/bc/P", method: "platform.validates", params: options });
  }
  

}

export const platformvm = new PlatformVM();

