/// <reference path="../UI.StringIndexable/index.d.ts" />

/**
The base class for creating code based themes
*/
declare interface CodeBasedTheme extends StringIndexable {

/**
```
getStyle(elementType: string, styleClasses: undefined): object
```

Gets the style for a particular element with the given styleClasses.
*/
getStyle(elementType: string, styleClasses: undefined): object

}
