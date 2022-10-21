
/**
The `EventQueue` class bundles together one or more events from an `EventSource` that occurred in one frame.
*/
declare interface EventQueue<T> {

/**
```
(get) completed: boolean
(set) completed: boolean
```

Specifies whether the current `EventQueue` is still receiving events.
*/
completed: boolean

/**
```
(get) events: undefined
(set) events: undefined
```

Specifies the list of events payloads that occurred in the current frame
*/
events: undefined

/**
```
(get) firing: boolean
(set) (Not Available)
```

Specifies whether the current `EventQueue` has events in the current frame.
*/
firing: boolean

}
