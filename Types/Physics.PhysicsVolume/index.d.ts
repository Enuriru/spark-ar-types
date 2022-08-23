

/**
[{"kind":"introducedBy","version":2977307455},{"kind":"capability","capability":"physics","orCapability":""}]
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
(get) type: PhysicsObjectTypeInt
(set) (Not Available)
```
*/
type: PhysicsObjectTypeInt

/**
```
getProperties(): Promise<unknown>
```

*/
getProperties(): Promise<unknown>

}
