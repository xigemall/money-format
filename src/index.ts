import { format, FormatOptions } from './lib/format';
import { RMB, RmbOptions } from './lib/rmb';
import { sum, Options } from "./lib/sum";
import { difference } from "./lib/difference";


console.log(sum(['12.126', 10], {decimals: 1, round: true}))
export {
    format,
    FormatOptions,
    RMB,
    RmbOptions,
    sum,
    Options,
    difference
}
