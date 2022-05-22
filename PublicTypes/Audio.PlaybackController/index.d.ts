declare interface PlaybackController {
/**
*  
 * loop(): void
 *  
 * 
 * Deprecated. Use the `setLooping()` method instead to loop the audio playback controller.
 */
loop(): void;

/**
*  
 * play(): void
 *  
 * 
 * Deprecated. Use the `setPlaying()` method instead to play the audio playback controller.
 */
play(): void;

/**
*  
 * reset(): void
 *  
 * 
 * Resets the audio playback controller to the beginning of the audio.
 * If the audio playback controller is currently playing, playback will restart immediately when `reset()` is called. Otherwise, playback will not start until `setPlaying(true)` is called.
 */
reset(): void;

/**
*  
 * setLooping(looping: boolean): void
 *  
 * 
 * Sets whether the audio playback controller should loop. If `true` is passed in to the method the audio will loop infinitely.
 * Even if an audio playback controller is set to loop, `setPlaying(true)` still needs to be called for the audio to play.
 * * `looping` - a boolean value specifying whether the audio should loop.
 */
setLooping(looping: boolean): void;

/**
*  
 * setPlaying(playing: boolean): void
 *  
 * 
 * Sets whether the audio playback controller should play. If `true` is passed in to the method the audio will play, if `false` is passed in playback will pause.
 * Audio does not automatically reset when playback finishes. Use the `reset()` method to reset playback to the beginning of the audio.
 * * `playing` - a boolean value specifying whether the audio should play.
 */
setPlaying(playing: boolean): void;

/**
*  
 * stop(): void
 *  
 * 
 * Deprecated. Use the `setPlaying()` method instead to stop the audio playback controller.
 */
stop(): void;

}
