/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Animation.Driver/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
declare interface TimeDriver extends Driver {
/**
*  
 * isRunning(): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` indicating whether the animation is running.
 */
isRunning(): BoolSignal;

/**
*  
 * onAfterIteration(): EventSource<number>
 *  
 * 
 * Returns an `EventSource` to which you may subscribe.
 * The event fires when the animation with loopCount completes an iteration.
 * Subscribers will receive the one-based index of the completed iteration.
 */
onAfterIteration(): EventSource<number>;

/**
*  
 * onCompleted(): EventSource<any>
 *  
 * 
 * Returns an`EventSource` to which you may subscribe.The event fires once when the animation completes.
 */
onCompleted(): EventSource<any>;

/**
*  
 * reset(): void
 *  
 * 
 * Resets the driver progress to time point zero.
 */
reset(): void;

/**
*  
 * reverse(): void
 *  
 * 
 * Reverses the animation from the moment it is called and goes back in time.
 */
reverse(): void;

/**
*  
 * start(): void
 *  
 * 
 * Starts the animation.
 */
start(): void;

/**
*  
 * stop(): void
 *  
 * 
 * Stops or pauses the animation.
 */
stop(): void;

}
