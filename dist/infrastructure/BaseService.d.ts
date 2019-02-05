import { BaseServiceOptions } from '../../types/types';
export declare class BaseService {
    protected readonly url: string;
    protected readonly requester: object;
    readonly headers: {
        [header: string]: string | number;
    };
    readonly rejectUnauthorized: boolean;
    constructor({ token, oauthToken, sudo, host, url, version, rejectUnauthorized, requester, }: BaseServiceOptions);
}
