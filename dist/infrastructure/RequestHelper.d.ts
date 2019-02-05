import { PaginatedRequestOptions, BaseRequestOptions, GetResponse, PostResponse, PutResponse, DelResponse } from '../../types/types';
export declare function get(service: any, endpoint: string, options?: PaginatedRequestOptions): Promise<GetResponse>;
export declare function stream(service: any, endpoint: string, options?: BaseRequestOptions): any;
export declare function post(service: any, endpoint: string, options?: BaseRequestOptions): Promise<PostResponse>;
export declare function put(service: any, endpoint: string, options?: BaseRequestOptions): Promise<PutResponse>;
export declare function del(service: any, endpoint: string, options?: BaseRequestOptions): Promise<DelResponse>;
