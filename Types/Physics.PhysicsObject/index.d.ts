
declare interface PhysicsObject {

/**
```
(get) id: number
(set) (Not Available)
```

An identifier for this object
*/
id: number

/**
```
(get) name: string
(set) (Not Available)
```

The name of this object
*/
name: string

/**
```
(get) type: PhysicsObjectType
(set) (Not Available)
```

The PhysicsObjectType describing the type of this object
*/
type: PhysicsObjectType

/**
```
interface(iface: PhysicsInterface): any
```

Retrieve the specified interface for the object. See Physics.interface() on Physics Module.
*/
interface(iface: PhysicsInterface): any

}
