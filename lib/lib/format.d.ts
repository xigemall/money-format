export interface FormatOptions {
    decimal?: number;
    delimiter?: string;
    digit?: number | boolean;
    round?: boolean;
}
/**
 *
 * @param money
 * @param options
 */
export declare function format(money: number | string, options?: FormatOptions): string;
