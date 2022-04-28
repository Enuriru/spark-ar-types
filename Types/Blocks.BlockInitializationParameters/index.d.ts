

/**
[{"kind":"capability","capability":"scriptingDynamicInstantiation","orCapability":""},{"kind":"capability","capability":"blocks","orCapability":""},{"kind":"introducedBy","version":81637799}]
*/


/**
The `BlockInitializationParameters` are key-value pairs used to define the behavior of certain features and JavaScript modules inside a dynamically instantiated Block.
All properties below are optional, and you may specify them to determine how these JS modules and features are going to behave on dynamically instantiated Blocks.
*/
declare interface BlockInitializationParameters {

/**
```
(get) multipeerId: string
(set) multipeerId: string
```

A unique id for block multipeer communication channel. A multipeer message in the block can only be received by the instantiated block with the same multipeerId on the other participants’ side.
The value must be unique across all instantiated blocks in the parent.
*/
multipeerId: string

}
