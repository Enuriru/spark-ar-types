/// <reference path="../Fonts.FontId/index.d.ts" />

/**
Abstract base class used to introduce new icon sets
*/
declare interface IconSet<TIconName> {

/**
```
getFont(): FontId
```

*/
getFont(): FontId

/**
```
getIconData(iconName: TIconName): IconData | null
```

Gets the icon data for the given icon name
*/
getIconData(iconName: TIconName): IconData | null

/**
```
getIconUnicodeHex(key: TIconName): string
```

*/
getIconUnicodeHex(key: TIconName): string

}
