import {YYOptionsFile} from './types/options';
import JSON5 from 'json5';

export function json_safe_value(v: string | number | boolean | null) {
    if (typeof(v) == 'number') {
        return v.toString();
    }
    if (typeof(v) == 'string') {
        return `"${v.replaceAll('"','\\"')}"`
    }
    if (typeof(v) == 'boolean') {
        return v ? 'true' : 'false';
    }
    return 'null';
}

export function unsafe_stringify(keys: string[][],self: Object) {
    let str = '{\n';
    for (const key of keys) {
        str += `  "${key[0]}":${json_safe_value((self as any)[key[1]])},\n`;
    }
    str += '}';
    return str;
}

export function unsafe_init(yy: string, keys: string[][], target: Object) {
    const obj = JSON5.parse(yy);
    for (const key of keys) {
        (target as any)[key[1]] = obj[key[0]];
    }
    return target;
}