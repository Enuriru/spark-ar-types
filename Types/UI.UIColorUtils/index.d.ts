/// <reference path="../Reactive.RgbaSignal/index.d.ts" />

/**
Utility methods to be used for UIColor
*/
declare interface UIColorUtils {

/**
```
GRAY(value: number): UIColorRGBA
```

*/
GRAY(value: number): UIColorRGBA

/**
```
hsva(h: number, s: number, v: number, a: number): UIColorHSVA
```

Creates a UIColor instance based on the input HSVA value
*/
hsva(h: number, s: number, v: number, a: number): UIColorHSVA

/**
```
rgba(r: number, g: number, b: number, a: number): UIColorRGBA
```

Creates a UIColor instance based on the input RGBA value
*/
rgba(r: number, g: number, b: number, a: number): UIColorRGBA

/**
```
rgbaSignalToArray(signal: RgbaSignal): undefined
```

Converts the input RgbaSignal into an array[4] containing [r, g, b, a] values.
*/
rgbaSignalToArray(signal: RgbaSignal): undefined

/**
```
toRGBASignal(color: UIColor): RgbaSignal
```

*/
toRGBASignal(color: UIColor): RgbaSignal

}
