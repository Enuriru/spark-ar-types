
/**
The `CatalogEntry` class describes a single entry, or object, in a local dataset catalog.
*/
declare interface CatalogEntry {

/**
```
(get) geoJson: Object
(set) (Not Available)
```

Returns the local object in GeoJson format.
*/
geoJson: Object

/**
```
(get) id: string
(set) (Not Available)
```

The unique ID of the local object in the catalog.
*/
id: string

/**
```
(get) name: string
(set) (Not Available)
```

The local name of the object in the catalog.
Example: 'Central Park'.
*/
name: string

}
