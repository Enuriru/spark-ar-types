declare interface StorageLocation {
/**
*  
 * get(key: string): Promise<Object | null>
 *  
 * 
 * Gets the value with the specified key.
 * Returns a `Promise` which will be fulfilled with a JavaScript object or an
 * error. The `Promise` resolves with `null` if no data was stored under the given
 * `key`, and fails if an internal or an I/O error occurs.
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
 * an internal or an I/O error occurs.
 */
remove(key: string): Promise<void>;

/**
*  
 * set(key: string, value: Object): Promise<void>
 *  
 * 
 * Sets the value for the given key.
 * Returns a `Promise` that resolves after the set is complete, and fails if
 * an internal or an I/O error occurs.
 * Note: `value` must be JSON-serializable.
 */
set(key: string, value: Object): Promise<void>;

}
