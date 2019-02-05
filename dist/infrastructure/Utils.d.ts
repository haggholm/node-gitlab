import { Constructor, Bundle } from '../../types/types';
export declare function bundler<T extends {
    [name: string]: Constructor;
}, P extends keyof T>(services: T): Bundle<T, P>;
export declare function skipAllCaps(key: any, convert: any, options: any): any;
