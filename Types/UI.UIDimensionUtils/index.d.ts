/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />

/**
The static utility class to help with the calculation of dimensions
*/
declare interface UIDimensionUtils {

/**
```
applyOffset(box: Box3D, offset: DetailedBoxOffset<number>): Box3D
```

*/
applyOffset(box: Box3D, offset: DetailedBoxOffset<number>): Box3D

/**
```
boxOffsetToStageUnits(offset: BoxOffset<UIDimension>, usableSize: Vec3, stageSize: Vec3, stageScale: Vec3): DetailedBoxOffset<number>
```

Converts the input BoxOffset in UIDimensions into canvas pixels
*/
boxOffsetToStageUnits(offset: BoxOffset<UIDimension>, usableSize: Vec3, stageSize: Vec3, stageScale: Vec3): DetailedBoxOffset<number>

/**
```
cornerValue2DToStageUnits(cornerValue: CornerValue2D<UIDimension>, usableSize: Vec3, stageSize: Vec3, stageScale: Vec3): DetailedCornerValue2D<number>
```

Converts any CornerValue2D value into detailed per-corner values in canvas pixels
*/
cornerValue2DToStageUnits(cornerValue: CornerValue2D<UIDimension>, usableSize: Vec3, stageSize: Vec3, stageScale: Vec3): DetailedCornerValue2D<number>

/**
```
toStageUnits(value: UIDimension, usableSize: number, stageSize: Vec3, stageScale: number): number
```

Converts the input UIDimension into canvas pixels
*/
toStageUnits(value: UIDimension, usableSize: number, stageSize: Vec3, stageScale: number): number

}
