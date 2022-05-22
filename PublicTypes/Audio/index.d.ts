/// <reference path="../Audio.PlaybackController/index.d.ts" />
declare class AudioModule {
/**
*  
 * getAudioPlaybackController(name: string): Promise<PlaybackController>
 *  
 * 
 * Returns the playback controller with the specified name from the Assets.
 * * `name` - the name of the audio playback controller as it appears in the Assets panel.
 */
static getAudioPlaybackController(name: string): Promise<PlaybackController>;

}
export = AudioModule;
