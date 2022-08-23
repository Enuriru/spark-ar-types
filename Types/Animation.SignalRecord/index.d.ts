

/**
[{"kind":"capability","capability":"recordedSignalsForSamplers","orCapability":""}]
*/


/**
The `SignalRecord` class encapsulates recording data for a value signal.
*/
declare interface SignalRecord {

/**
```
(get) durationMs: number
(set) (Not Available)
```

Returns duration of SignalRecord recording in milliseconds.
*/
durationMs: number

/**
```
(get) recordCount: number
(set) (Not Available)
```

Returns number of records taken in this SignalRecord.
*/
recordCount: number

/**
```
(get) timestampsString: string
(set) (Not Available)
```

Returns the array of timestamps (as integer milliseconds) of this SignalRecord as a string.
*/
timestampsString: string

/**
```
(get) valuesString: string
(set) (Not Available)
```

Returns the array of values (as doubles to 4 decimal precision) of this SignalRecord as a string.
*/
valuesString: string

}
