/// <reference path="../Svgs.Svg/index.d.ts" />
declare class SvgsModule {
/**
*  
 * findFirst(name: string): Promise<Svg | null>
 *  
 * 
 * Returns a promise that is resolved with the svg of a requested name or null if none was found.
 * **See Also**: `Svgs.findUsingPattern`, `Svgs.getAll`.
 */
static findFirst(name: string): Promise<Svg | null>;

/**
*  
 * findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Svg>>
 *  
 * 
 * Returns a promise that is resolved with the all of the svgs matching the name pattern or empty array if none was found.
 * Pattern format:
 * `*` matches any characters sequence.
 * `\` can be used to include in pattern any of the control characters (including '\' itself)
 * 
 * Examples:
 * `findUsingPattern("*")` will retrive all of the svgs.
 * `findUsingPattern("*A")` will retrieve all of the svgs suffixed with 'A'.
 * `findUsingPattern("A*")` will retrieve all of the svgs prefixed with 'A'.
 * `findUsingPattern("*A*", {limit: 10})` will retrieve at most 10 of the svgs containing 'A',
 * 
 * `limit` parameter describes if `findUsingPattern` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.
 * 
 * **See Also**: `Svgs.getAll`, `Svgs.findFirst`.
 */
static findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Svg>>;

/**
*  
 * getAll(): Promise<Array<Svg>>
 *  
 * 
 * Returns a promise that is resolved with all of the svgs.
 * **See Also**: `Svgs.findUsingPattern`, `Svgs.findFirst`.
 */
static getAll(): Promise<Array<Svg>>;

}
export = SvgsModule;
