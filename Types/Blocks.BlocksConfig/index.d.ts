/// <reference path="../Persistence.BlockStorage/index.d.ts" />


/**
[{"kind":"capability","capability":"scriptingDynamicInstantiation","orCapability":""},{"kind":"capability","capability":"blocks","orCapability":""},{"kind":"introducedBy","version":81637799}]
*/


/**
The `BlockModulesConfig` are key-value pairs used to define the behavior of certain features and JavaScript modules inside a dynamically instantiated Block.
All properties below are optional, and you may specify them to determine how these JS modules and features are going to behave on dynamically instantiated Blocks.
*/
declare interface BlocksConfig {

/**
```
(get) extras: {[key: string]: any}
(set) extras: {[key: string]: any}
```

Extra data that will be pass down to the instantiated block. The extras will be accessible in the Block script via `modulesConfigExtras` as constants.
*/
extras: {[key: string]: any}

/**
```
(get) multipeerId: string
(set) multipeerId: string
```

A unique id for block multipeer communication channel. A multipeer message in the block can only be received by the instantiated block with the same multipeerId on the other participantsâ€™ side.
The value must be unique across all instantiated blocks in the parent.
*/
multipeerId: string

/**
```
(get) storage: BlockStorage
(set) storage: BlockStorage
```

A config for persistence in the instantiated block. It determines where this data is stored, e.g. local vs. on the network.
The value must be unique across all instantiated blocks in the parent.
*/
storage: BlockStorage

}
