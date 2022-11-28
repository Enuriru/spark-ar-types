

/**
[{"kind":"capability","capability":"scriptingDynamicInstantiation","orCapability":""},{"kind":"capability","capability":"blocks","orCapability":""},{"kind":"capabilityOr","version":394293456,"capability":"persistenceV2"},{"kind":"introducedBy","version":867759298}]
*/


/**
This class represents a storage location for a Block's persistent data. Note it gives no access to the actual data stored within.
*/
declare interface BlockStorage {

/**
```
(get) assetId: string
(set) (Not Available)
```

External Block ID or VO Instance State ID
*/
assetId: string

/**
```
(get) assetType: PersistenceAssetType
(set) (Not Available)
```

Asset type this storage is associated with.
*/
assetType: PersistenceAssetType

/**
```
(get) storageIdentifier: string
(set) (Not Available)
```

Unique identifier of this Block Storage, given the PersistenceLocation.
*/
storageIdentifier: string

/**
```
(get) storageLocation: PersistenceLocation
(set) (Not Available)
```

Type of persistence location.
*/
storageLocation: PersistenceLocation

}
