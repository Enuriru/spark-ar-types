
/**
The static utility class to help with the calculation of dimensions
*/
declare interface UIDimensionUtils {

/**
```
boxOffsetToMeters(offset: BoxOffset<UIDimension>, usableWidth: number, usableHeight: number, usableDepth: number, stageWidth: number, stageHeight: number, stageDepth: number): DetailedBoxOffset<number>
```

Converts the input BoxOffset in UIDimensions into meters
*/
boxOffsetToMeters(offset: BoxOffset<UIDimension>, usableWidth: number, usableHeight: number, usableDepth: number, stageWidth: number, stageHeight: number, stageDepth: number): DetailedBoxOffset<number>

/**
```
cornerValue2DToMeters(cornerValue: CornerValue2D<UIDimension>, usableWidth: number, usableHeight: number, usableDepth: number, stageWidth: number, stageHeight: number, stageDepth: number): DetailedCornerValue2D<number>
```

Converts any CornerValue2D value into detailed per-corner values in meters
*/
cornerValue2DToMeters(cornerValue: CornerValue2D<UIDimension>, usableWidth: number, usableHeight: number, usableDepth: number, stageWidth: number, stageHeight: number, stageDepth: number): DetailedCornerValue2D<number>

/**
```
toMeters(value: UIDimension, usableSize: number, stageWidth: number, stageHeight: number, stageDepth: number): number
```

Converts the input UIDimension into meters
*/
toMeters(value: UIDimension, usableSize: number, stageWidth: number, stageHeight: number, stageDepth: number): number

}
