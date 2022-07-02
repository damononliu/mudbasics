/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";

export declare namespace IEIP2981RoyaltyOverride {
  export type TokenRoyaltyConfigStruct = {
    tokenId: PromiseOrValue<BigNumberish>;
    recipient: PromiseOrValue<string>;
    bps: PromiseOrValue<BigNumberish>;
  };

  export type TokenRoyaltyConfigStructOutput = [BigNumber, string, number] & {
    tokenId: BigNumber;
    recipient: string;
    bps: number;
  };

  export type TokenRoyaltyStruct = {
    recipient: PromiseOrValue<string>;
    bps: PromiseOrValue<BigNumberish>;
  };

  export type TokenRoyaltyStructOutput = [string, number] & {
    recipient: string;
    bps: number;
  };
}

export interface PersonaInterface extends utils.Interface {
  functions: {
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "currentPersonaId()": FunctionFragment;
    "defaultRoyalty()": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "getTokenRoyaltiesCount()": FunctionFragment;
    "getTokenRoyaltyByIndex(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "isMinter(address)": FunctionFragment;
    "isTrustedForwarder(address)": FunctionFragment;
    "mint(address)": FunctionFragment;
    "name()": FunctionFragment;
    "nuke(uint256)": FunctionFragment;
    "ovmL1CrossDomainMessenger()": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "personaMirrorL2()": FunctionFragment;
    "personaTokenURIGenerator()": FunctionFragment;
    "royaltyInfo(uint256,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setDefaultRoyalty((address,uint16))": FunctionFragment;
    "setMinter(address,bool)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setPersonaMirrorL2(address)": FunctionFragment;
    "setPersonaTokenURIGeneratorAddress(address)": FunctionFragment;
    "setTokenRoyalties((uint256,address,uint16)[])": FunctionFragment;
    "setTrustedForwarder(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "trustedForwarder()": FunctionFragment;
    "versionRecipient()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approve"
      | "balanceOf"
      | "currentPersonaId"
      | "defaultRoyalty"
      | "getApproved"
      | "getTokenRoyaltiesCount"
      | "getTokenRoyaltyByIndex"
      | "isApprovedForAll"
      | "isMinter"
      | "isTrustedForwarder"
      | "mint"
      | "name"
      | "nuke"
      | "ovmL1CrossDomainMessenger"
      | "owner"
      | "ownerOf"
      | "personaMirrorL2"
      | "personaTokenURIGenerator"
      | "royaltyInfo"
      | "safeTransferFrom(address,address,uint256)"
      | "safeTransferFrom(address,address,uint256,bytes)"
      | "setApprovalForAll"
      | "setDefaultRoyalty"
      | "setMinter"
      | "setOwner"
      | "setPersonaMirrorL2"
      | "setPersonaTokenURIGeneratorAddress"
      | "setTokenRoyalties"
      | "setTrustedForwarder"
      | "supportsInterface"
      | "symbol"
      | "tokenURI"
      | "transferFrom"
      | "trustedForwarder"
      | "versionRecipient"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: "currentPersonaId", values?: undefined): string;
  encodeFunctionData(functionFragment: "defaultRoyalty", values?: undefined): string;
  encodeFunctionData(functionFragment: "getApproved", values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: "getTokenRoyaltiesCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "getTokenRoyaltyByIndex", values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "isMinter", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: "isTrustedForwarder", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "nuke", values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: "ovmL1CrossDomainMessenger", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "ownerOf", values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: "personaMirrorL2", values?: undefined): string;
  encodeFunctionData(functionFragment: "personaTokenURIGenerator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "royaltyInfo",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultRoyalty",
    values: [IEIP2981RoyaltyOverride.TokenRoyaltyStruct]
  ): string;
  encodeFunctionData(functionFragment: "setMinter", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
  encodeFunctionData(functionFragment: "setOwner", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: "setPersonaMirrorL2", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: "setPersonaTokenURIGeneratorAddress", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: "setTokenRoyalties",
    values: [IEIP2981RoyaltyOverride.TokenRoyaltyConfigStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "setTrustedForwarder", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokenURI", values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "trustedForwarder", values?: undefined): string;
  encodeFunctionData(functionFragment: "versionRecipient", values?: undefined): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "currentPersonaId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "defaultRoyalty", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTokenRoyaltiesCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTokenRoyaltyByIndex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isMinter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nuke", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ovmL1CrossDomainMessenger", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "personaMirrorL2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "personaTokenURIGenerator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "royaltyInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setDefaultRoyalty", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setMinter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPersonaMirrorL2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPersonaTokenURIGeneratorAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setTokenRoyalties", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setTrustedForwarder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "trustedForwarder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "versionRecipient", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "DefaultRoyaltySet(address,uint16)": EventFragment;
    "NewPersonaTokenURIGenerator(address)": EventFragment;
    "TokenRoyaltyRemoved(uint256)": EventFragment;
    "TokenRoyaltySet(uint256,address,uint16)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DefaultRoyaltySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPersonaTokenURIGenerator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenRoyaltyRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenRoyaltySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  id: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ApprovalForAllEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<[string, string, boolean], ApprovalForAllEventObject>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface DefaultRoyaltySetEventObject {
  recipient: string;
  bps: number;
}
export type DefaultRoyaltySetEvent = TypedEvent<[string, number], DefaultRoyaltySetEventObject>;

export type DefaultRoyaltySetEventFilter = TypedEventFilter<DefaultRoyaltySetEvent>;

export interface NewPersonaTokenURIGeneratorEventObject {
  generator: string;
}
export type NewPersonaTokenURIGeneratorEvent = TypedEvent<[string], NewPersonaTokenURIGeneratorEventObject>;

export type NewPersonaTokenURIGeneratorEventFilter = TypedEventFilter<NewPersonaTokenURIGeneratorEvent>;

export interface TokenRoyaltyRemovedEventObject {
  tokenId: BigNumber;
}
export type TokenRoyaltyRemovedEvent = TypedEvent<[BigNumber], TokenRoyaltyRemovedEventObject>;

export type TokenRoyaltyRemovedEventFilter = TypedEventFilter<TokenRoyaltyRemovedEvent>;

export interface TokenRoyaltySetEventObject {
  tokenId: BigNumber;
  recipient: string;
  bps: number;
}
export type TokenRoyaltySetEvent = TypedEvent<[BigNumber, string, number], TokenRoyaltySetEventObject>;

export type TokenRoyaltySetEventFilter = TypedEventFilter<TokenRoyaltySetEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  id: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface Persona extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PersonaInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approve(
      spender: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    currentPersonaId(overrides?: CallOverrides): Promise<[BigNumber]>;

    defaultRoyalty(overrides?: CallOverrides): Promise<[string, number] & { recipient: string; bps: number }>;

    getApproved(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    getTokenRoyaltiesCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTokenRoyaltyByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IEIP2981RoyaltyOverride.TokenRoyaltyConfigStructOutput]>;

    isApprovedForAll(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isMinter(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    mint(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nuke(
      personaId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ovmL1CrossDomainMessenger(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    personaMirrorL2(overrides?: CallOverrides): Promise<[string]>;

    personaTokenURIGenerator(overrides?: CallOverrides): Promise<[string]>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDefaultRoyalty(
      royalty: IEIP2981RoyaltyOverride.TokenRoyaltyStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMinter(
      minter: PromiseOrValue<string>,
      allowMint: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newContractOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPersonaMirrorL2(
      personaMirrorAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPersonaTokenURIGeneratorAddress(
      personaTokenURIGeneratorAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTokenRoyalties(
      royaltyConfigs: IEIP2981RoyaltyOverride.TokenRoyaltyConfigStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTrustedForwarder(
      trustedForwarderAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenURI(personaId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    trustedForwarder(overrides?: CallOverrides): Promise<[string]>;

    versionRecipient(overrides?: CallOverrides): Promise<[string]>;
  };

  approve(
    spender: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  currentPersonaId(overrides?: CallOverrides): Promise<BigNumber>;

  defaultRoyalty(overrides?: CallOverrides): Promise<[string, number] & { recipient: string; bps: number }>;

  getApproved(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  getTokenRoyaltiesCount(overrides?: CallOverrides): Promise<BigNumber>;

  getTokenRoyaltyByIndex(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IEIP2981RoyaltyOverride.TokenRoyaltyConfigStructOutput>;

  isApprovedForAll(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isMinter(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  mint(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  nuke(
    personaId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ovmL1CrossDomainMessenger(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerOf(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  personaMirrorL2(overrides?: CallOverrides): Promise<string>;

  personaTokenURIGenerator(overrides?: CallOverrides): Promise<string>;

  royaltyInfo(
    tokenId: PromiseOrValue<BigNumberish>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  "safeTransferFrom(address,address,uint256)"(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: PromiseOrValue<string>,
    approved: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDefaultRoyalty(
    royalty: IEIP2981RoyaltyOverride.TokenRoyaltyStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMinter(
    minter: PromiseOrValue<string>,
    allowMint: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newContractOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPersonaMirrorL2(
    personaMirrorAddr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPersonaTokenURIGeneratorAddress(
    personaTokenURIGeneratorAddr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTokenRoyalties(
    royaltyConfigs: IEIP2981RoyaltyOverride.TokenRoyaltyConfigStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTrustedForwarder(
    trustedForwarderAddr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenURI(personaId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  trustedForwarder(overrides?: CallOverrides): Promise<string>;

  versionRecipient(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    approve(
      spender: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    currentPersonaId(overrides?: CallOverrides): Promise<BigNumber>;

    defaultRoyalty(overrides?: CallOverrides): Promise<[string, number] & { recipient: string; bps: number }>;

    getApproved(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    getTokenRoyaltiesCount(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenRoyaltyByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IEIP2981RoyaltyOverride.TokenRoyaltyConfigStructOutput>;

    isApprovedForAll(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isMinter(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    mint(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    nuke(personaId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    ovmL1CrossDomainMessenger(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerOf(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    personaMirrorL2(overrides?: CallOverrides): Promise<string>;

    personaTokenURIGenerator(overrides?: CallOverrides): Promise<string>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setDefaultRoyalty(royalty: IEIP2981RoyaltyOverride.TokenRoyaltyStruct, overrides?: CallOverrides): Promise<void>;

    setMinter(
      minter: PromiseOrValue<string>,
      allowMint: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(newContractOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setPersonaMirrorL2(personaMirrorAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setPersonaTokenURIGeneratorAddress(
      personaTokenURIGeneratorAddr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenRoyalties(
      royaltyConfigs: IEIP2981RoyaltyOverride.TokenRoyaltyConfigStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    setTrustedForwarder(trustedForwarderAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenURI(personaId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    trustedForwarder(overrides?: CallOverrides): Promise<string>;

    versionRecipient(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      id?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      id?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "DefaultRoyaltySet(address,uint16)"(recipient?: null, bps?: null): DefaultRoyaltySetEventFilter;
    DefaultRoyaltySet(recipient?: null, bps?: null): DefaultRoyaltySetEventFilter;

    "NewPersonaTokenURIGenerator(address)"(
      generator?: PromiseOrValue<string> | null
    ): NewPersonaTokenURIGeneratorEventFilter;
    NewPersonaTokenURIGenerator(generator?: PromiseOrValue<string> | null): NewPersonaTokenURIGeneratorEventFilter;

    "TokenRoyaltyRemoved(uint256)"(tokenId?: null): TokenRoyaltyRemovedEventFilter;
    TokenRoyaltyRemoved(tokenId?: null): TokenRoyaltyRemovedEventFilter;

    "TokenRoyaltySet(uint256,address,uint16)"(tokenId?: null, recipient?: null, bps?: null): TokenRoyaltySetEventFilter;
    TokenRoyaltySet(tokenId?: null, recipient?: null, bps?: null): TokenRoyaltySetEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      id?: PromiseOrValue<BigNumberish> | null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      id?: PromiseOrValue<BigNumberish> | null
    ): TransferEventFilter;
  };

  estimateGas: {
    approve(
      spender: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    currentPersonaId(overrides?: CallOverrides): Promise<BigNumber>;

    defaultRoyalty(overrides?: CallOverrides): Promise<BigNumber>;

    getApproved(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    getTokenRoyaltiesCount(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenRoyaltyByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    isApprovedForAll(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isMinter(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    mint(to: PromiseOrValue<string>, overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nuke(
      personaId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ovmL1CrossDomainMessenger(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    personaMirrorL2(overrides?: CallOverrides): Promise<BigNumber>;

    personaTokenURIGenerator(overrides?: CallOverrides): Promise<BigNumber>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setDefaultRoyalty(
      royalty: IEIP2981RoyaltyOverride.TokenRoyaltyStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMinter(
      minter: PromiseOrValue<string>,
      allowMint: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOwner(
      newContractOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPersonaMirrorL2(
      personaMirrorAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPersonaTokenURIGeneratorAddress(
      personaTokenURIGeneratorAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTokenRoyalties(
      royaltyConfigs: IEIP2981RoyaltyOverride.TokenRoyaltyConfigStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTrustedForwarder(
      trustedForwarderAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(personaId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    trustedForwarder(overrides?: CallOverrides): Promise<BigNumber>;

    versionRecipient(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      spender: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentPersonaId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultRoyalty(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getApproved(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenRoyaltiesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenRoyaltyByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isMinter(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nuke(
      personaId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ovmL1CrossDomainMessenger(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    personaMirrorL2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    personaTokenURIGenerator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDefaultRoyalty(
      royalty: IEIP2981RoyaltyOverride.TokenRoyaltyStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMinter(
      minter: PromiseOrValue<string>,
      allowMint: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newContractOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPersonaMirrorL2(
      personaMirrorAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPersonaTokenURIGeneratorAddress(
      personaTokenURIGeneratorAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTokenRoyalties(
      royaltyConfigs: IEIP2981RoyaltyOverride.TokenRoyaltyConfigStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTrustedForwarder(
      trustedForwarderAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(personaId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    trustedForwarder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    versionRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
