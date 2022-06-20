export interface RmbOptions {
    prefix?: string;
    negativeStr?: string | boolean;
    integerStr?: string;
}
/**
 *
 * @param money
 * @param options
 * @constructor
 */
export declare function RMB(money: string | number, options?: RmbOptions): string;
