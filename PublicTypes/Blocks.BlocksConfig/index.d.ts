/// <reference path="../Persistence.BlockStorage/index.d.ts" />
declare class BlockModulesConfig {
/**
* ```
(get) extras: {[key: string]: any}
(set) extras: {[key: string]: any}
```

Extra data that will be pass down to the instantiated block. The extras will be accessible in the Block script via `modulesConfigExtras` as constants.
*/
static readonly extras: any;
/**
* ```
(get) multipeerId: string
(set) multipeerId: string
```

A unique id for block multipeer communication channel. A multipeer message in the block can only be received by the instantiated block with the same multipeerId on the other participants’ side.
The value must be unique across all instantiated blocks in the parent.
*/
static readonly multipeerId: string;
/**
* ```
(get) storage: BlockStorage
(set) storage: BlockStorage
```

A storage location for a Block's persistent data.
The value must be unique across all instantiated blocks in the parent. See the PersistenceModule APIs for details.
*/
static readonly storage: BlockStorage;
}
export = BlockModulesConfig;
