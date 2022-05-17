

/**
[{"kind":"capability","capability":"scriptingDynamicInstantiation","orCapability":""},{"kind":"capability","capability":"blocks","orCapability":""},{"kind":"capability","capability":"persistenceV2","orCapability":""},{"kind":"introducedBy","version":867759298}]
*/


/**
This class represents a storage location for a Block's persistent data. Note it gives no access to the actual data stored within.
*/
declare interface BlockStorage {

/**
```
(get) identifier: string
(set) (Not Available)
```

Unique identifier of this Block Storage, given the PersistenceLocation.
*/
identifier: string

/**
```
(get) location: PersistenceLocation
(set) (Not Available)
```

Type of the persistence location. One of temporary, local and remote.
*/
location: PersistenceLocation

}
