

/**
[{"kind":"availableIn","availableIn":"DocumentType.Any"},{"kind":"introducedBy","version":2977307455},{"kind":"capability","capability":"physics","orCapability":""}]
*/


declare interface PhysicsVolume {

/**
```
(get) id: number
(set) (Not Available)
```
*/
id: number

/**
```
(get) name: string
(set) (Not Available)
```
*/
name: string

/**
```
(get) type: PhysicsObjectType
(set) (Not Available)
```
*/
type: PhysicsObjectType

/**
```
getProperties(): Promise<object>
```

*/
getProperties(): Promise<object>

/**
```
setProperties(props: object): Promise<void>
```

*/
setProperties(props: object): Promise<void>

}
