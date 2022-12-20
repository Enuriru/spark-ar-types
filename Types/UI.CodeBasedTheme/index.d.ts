/// <reference path="../UI.StringIndexable/index.d.ts" />

/**
The base class for creating code based themes
*/
declare interface CodeBasedTheme extends StringIndexable {

/**
```
append(themes: undefined): Theme
```

This method takes an array of themes as parameter and returns a new calculated Theme by the cascading logic.
*/
append(themes: undefined): Theme

/**
```
getStyle(elementType: string, styleClasses: undefined): object
```

Gets the style for a particular element with the given styleClasses.
*/
getStyle(elementType: string, styleClasses: undefined): object

}
