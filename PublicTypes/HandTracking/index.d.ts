/// <reference path="../HandTracking.Hand/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare class HandTrackingModule {
/**
* ```
(get) count: ScalarSignal
(set) (Not Available)
```

The number of hands currently tracked in the scene, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
*/
static readonly count: ScalarSignal;
/**
*  
 * hand(index: number): Hand
 *  
 * 
 * Returns a [`Hand`](/classes/handtrackingmodule.hand) object from the array of detected hands.
 * * `index` - the index of the `Hand` object to retrieve from the array.
 */
static hand(index: number): Hand;

}
export = HandTrackingModule;
