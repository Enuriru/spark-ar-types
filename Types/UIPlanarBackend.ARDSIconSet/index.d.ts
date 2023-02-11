/// <reference path="../Fonts.FontId/index.d.ts" />

declare interface ARDSIconSet extends IconSet<ArdsIconKeys> {

/**
```
getFont(): FontId
```

*/
getFont(): FontId

/**
```
getIconUnicodeHex(key: ArdsIconKeys): string
```

*/
getIconUnicodeHex(key: ArdsIconKeys): string

}
