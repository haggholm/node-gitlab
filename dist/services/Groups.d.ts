import { BaseService } from '../infrastructure';
import { PaginatedRequestOptions, BaseRequestOptions, Sudo, GroupId } from '../../types/types';
declare class Groups extends BaseService {
    all(options?: PaginatedRequestOptions): Promise<import("../../types/types").GetResponse>;
    create(options?: BaseRequestOptions): Promise<object>;
    createLDAPLink(groupId: GroupId, cn: any, groupAccess: any, provider: string, options?: Sudo): Promise<object>;
    edit(groupId: GroupId, options?: BaseRequestOptions): Promise<object>;
    remove(groupId: GroupId, options?: Sudo): Promise<object>;
    removeLDAPLink(groupId: GroupId, cn: any, { provider, ...options }?: Sudo & {
        provider?: string;
    }): Promise<object>;
    search(nameOrPath: string, options?: Sudo): Promise<import("../../types/types").GetResponse>;
    show(groupId: GroupId, options?: BaseRequestOptions): Promise<import("../../types/types").GetResponse>;
    subgroups(groupId: GroupId, options?: PaginatedRequestOptions): Promise<import("../../types/types").GetResponse>;
    syncLDAP(groupId: GroupId, options?: Sudo): Promise<object>;
}
export default Groups;
