/// <reference path="../Reactive.BoolSignal/index.d.ts" />
declare interface Layer {
/**
* ```
(get) hidden: BoolSignal
(set) hidden: BoolSignal
```

Returns a BoolSignal that indicates the hidden state of the layer
Sets the hidden state of the layer
*/
hidden: BoolSignal;
/**
* ```
(get) name: string
(set) (Not Available)
```

Name of the layer, set at time of creation
*/
name: string;
/**
*  
 * getRenderOrder(): Promise<number>
 *  
 * 
 * Rendering order (if present), 0 is first
 */
getRenderOrder(): Promise<number>;

}
