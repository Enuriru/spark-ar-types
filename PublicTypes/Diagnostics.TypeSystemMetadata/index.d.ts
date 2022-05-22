declare interface TypeSystemMetadata {
/**
*  
 * getModuleNames(): Promise<Array<string>>
 *  
 * 
 * Returns a promise that is resolved with an array of names of all the scripting modules that can be loaded through a `require` call.
 * Note: Available modules are based on the list of enabled capabilities.
 */
getModuleNames(): Promise<Array<string>>;

/**
*  
 * getTypeDescriptions(): Promise<Object>
 *  
 * 
 * Returns a promise that is resolved with the description of all of the types that can be used within effect.
 * Note: The type descriptions are based on the list of enabled capabilities.
 */
getTypeDescriptions(): Promise<Object>;

}
