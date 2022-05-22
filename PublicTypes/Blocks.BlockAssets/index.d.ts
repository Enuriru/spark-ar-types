/// <reference path="../Blocks.BlockAsset/index.d.ts" />
declare interface BlockAssets {
/**
*  
 * findFirst(name: string): Promise<BlockAsset | null>
 *  
 * 
 * Returns a promise that is resolved with the Block Asset with the given name, or null if none was found.
 * **See Also**: `BlockAssets.findUsingPattern`, `BlockAssets.getAll`.
 */
findFirst(name: string): Promise<BlockAsset | null>;

/**
*  
 * findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<BlockAsset>>
 *  
 * 
 * Returns a promise that is resolved with the all of the Block Assets matching the name pattern, or an empty array if none were found.
 * Pattern format:
 * `*` matches any character sequence.
 * `\` can be used as an escape character, to include in the pattern any of the control characters (including '\' itself)
 * 
 * Examples:
 * `findUsingPattern("*")` will retrive all of the Block Assets (same as `BlockAssets.getAll`).
 * `findUsingPattern("*A")` will retrieve all of the Block Assets suffixed with 'A'.
 * `findUsingPattern("A*")` will retrieve all of the Block Assets prefixed with 'A'.
 * `findUsingPattern("*A*", {limit: 10})` will retrieve at most 10 of the Block Assets containing 'A',
 * 
 * `limit` parameter allows you to end the search after a given number of results have been found. (The default is no limit.) Non-positive values for limit are treated as unlimited.
 * 
 * **See Also**: `BlockAssets.getAll`, `BlockAssets.findFirst`.
 */
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<BlockAsset>>;

/**
*  
 * getAll(): Promise<Array<BlockAsset>>
 *  
 * 
 * Returns a promise that is resolved with all of the Block Assets.
 * **See Also**: `BlockAssets.findUsingPattern`, `BlockAssets.findFirst`.
 */
getAll(): Promise<Array<BlockAsset>>;

}
