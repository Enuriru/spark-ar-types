declare class BlockModulesConfig {
/**
* ```
(get) multipeerId: string
(set) multipeerId: string
```

A unique id for block multipeer communication channel. A multipeer message in the block can only be received by the instantiated block with the same multipeerId on the other participants’ side.
The value must be unique across all instantiated blocks in the parent.
*/
static readonly multipeerId: string;
}
export = BlockModulesConfig;
