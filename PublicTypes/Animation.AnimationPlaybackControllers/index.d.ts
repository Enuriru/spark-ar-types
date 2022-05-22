/// <reference path="../Animation.AnimationPlaybackController/index.d.ts" />
declare interface AnimationPlaybackControllers {
/**
*  
 * findFirst(name: string): Promise<AnimationPlaybackController | null>
 *  
 * 
 * Find first animation playback controller that matches a given name pattern.
 */
findFirst(name: string): Promise<AnimationPlaybackController | null>;

/**
*  
 * findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<AnimationPlaybackController>>
 *  
 * 
 * Find animation playback controllers with names that match a given pattern.
 */
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<AnimationPlaybackController>>;

/**
*  
 * getAll(): Promise<Array<AnimationPlaybackController>>
 *  
 * 
 * Get all animation playback controllers that are bundled in this effect.
 */
getAll(): Promise<Array<AnimationPlaybackController>>;

}
