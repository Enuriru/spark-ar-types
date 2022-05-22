declare interface Subscription {
/**
*  
 * unsubscribe(): void
 *  
 * 
 * Unsubscribes the previously subscribed callback from the `EventSource`.
 * **See Also**: `EventSource.subscribe`, `EventSource.subscribeOnNext`.
 */
unsubscribe(): void;

}
