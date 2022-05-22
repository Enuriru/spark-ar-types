/// <reference path="../Multipeer.BinaryMessageChannel/index.d.ts" />
/// <reference path="../Multipeer.MessageChannel/index.d.ts" />
declare class MultipeerModule {
/**
*  
 * getBinaryMessageChannel(topic: string): BinaryMessageChannel
 *  
 * 
 * Returns the specified [`BinaryMessageChannel`](/classes/MultipeerModule.BinaryMessageChannel).
 * If no channel with the specified name is found, the `GLOBAL` channel is used by default.
 * 
 * * `topic` - the name of the message channel (topic) to retrieve.
 */
static getBinaryMessageChannel(topic: string): BinaryMessageChannel;

/**
*  
 * getMessageChannel(topic: string): MessageChannel
 *  
 * 
 * Returns the specified [`MessageChannel`](/classes/MultipeerModule.MessageChannel).
 * If no channel with the specified name is found, the `GLOBAL` channel is used by default.
 * 
 * * `topic` - the name of the message channel (topic) to retrieve.
 */
static getMessageChannel(topic: string): MessageChannel;

}
export = MultipeerModule;
