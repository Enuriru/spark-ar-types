declare interface StorageLocation {
/**
*  
 * get(key: string): Promise<Object | null>
 *  
 * 
 * Gets the value with the specified key.
 * Returns a `Promise` which will be fulfilled with a JavaScript object or an
 * error. The `Promise` resolves with `null` if no data was stored under the given
 * `key`. The `Promise` is failed if an internal error occurs, or (in cases where
 * the StorageLocation is storing data remotely over the internet) if a network error
 * occurs.
 */
get(key: string): Promise<Object | null>;

/**
*  
 * remove(key: string): Promise<void>
 *  
 * 
 * Removes the data associated with the given key.
 * If the given key does not contain any data, this function does nothing.
 * Returns a `Promise` that resolves after the removal is complete, and fails if
 * an error occurs, such as an internal error, or (in cases where the
 * StorageLocation is storing data remotely over the internet) a network error.
 */
remove(key: string): Promise<void>;

/**
*  
 * set(key: string, value: Object): Promise<void>
 *  
 * 
 * Sets the value for the given key.
 * Returns a `Promise` that resolves after the set is complete, and fails if
 * an error occurs, such as an internal error, or (in cases where the
 * StorageLocation is storing data remotely over the internet) a network error.
 */
set(key: string, value: Object): Promise<void>;

}
