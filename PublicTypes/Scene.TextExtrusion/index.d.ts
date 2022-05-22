/// <reference path="../Fonts.FontId/index.d.ts" />
/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare interface TextExtrusion extends SceneObjectBase {
/**
* ```
(get) (Not Available)
(set) backMaterial: MaterialBase | null
```

Specifies the material of the back cap of 3-d text.
*/
backMaterial: MaterialBase | null;
/**
* ```
(get) depth: ScalarSignal
(set) depth: ScalarSignal
```

Text extrusion is only made through straight paths. This specifies the depth of the straight path of extrusion, starting from the position of textExtrusion scene object.
**Note**: Default value is 10 mm.
*/
depth: ScalarSignal;
/**
* ```
(get) (Not Available)
(set) font: FontId | null
```

Sets the given font from the fonts registry.
*/
font: FontId | null;
/**
* ```
(get) (Not Available)
(set) frontMaterial: MaterialBase | null
```

Specifies the material of the front cap of 3-d text.
*/
frontMaterial: MaterialBase | null;
/**
* ```
(get) letterSpacing: ScalarSignal
(set) letterSpacing: ScalarSignal
```

Specifies the letter spacing value.
*/
letterSpacing: ScalarSignal;
/**
* ```
(get) lineSpacing: ScalarSignal
(set) lineSpacing: ScalarSignal
```

Specifies the line spacing value.
*/
lineSpacing: ScalarSignal;
/**
* ```
(get) (Not Available)
(set) sideMaterial: MaterialBase | null
```

Specifies the material of the extrusion part of 3-d text.
*/
sideMaterial: MaterialBase | null;
/**
* ```
(get) text: StringSignal
(set) text: StringSignal
```

Specifies the text displayed.
*/
text: StringSignal;
/**
*  
 * getBackMaterial(): Promise<MaterialBase | null>
 *  
 * 
 * Returns a promise that is resolved with the material associated with the back cap
 * of 3-d text of given scene object or null if no material was assigned.
 */
getBackMaterial(): Promise<MaterialBase | null>;

/**
*  
 * getFont(): Promise<FontId | null>
 *  
 * 
 * Returns a promise that is resolved with the font identifier associated with the instance of TextExtrusion or null if none is.
 */
getFont(): Promise<FontId | null>;

/**
*  
 * getFrontMaterial(): Promise<MaterialBase | null>
 *  
 * 
 * Returns a promise that is resolved with the material associated with the front cap
 * of 3-d text of given scene object or null if no material was assigned.
 */
getFrontMaterial(): Promise<MaterialBase | null>;

/**
*  
 * getSideMaterial(): Promise<MaterialBase | null>
 *  
 * 
 * Returns a promise that is resolved with the material associated with the extrusion part
 * of 3-d text of given scene object or null if no material was assigned.
 */
getSideMaterial(): Promise<MaterialBase | null>;

}
