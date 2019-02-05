"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var infrastructure_1 = require("../infrastructure");
var Groups = /** @class */ (function (_super) {
    __extends(Groups, _super);
    function Groups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Groups.prototype.all = function (options) {
        return infrastructure_1.RequestHelper.get(this, 'groups', options);
    };
    Groups.prototype.create = function (options) {
        return infrastructure_1.RequestHelper.post(this, 'groups', options);
    };
    Groups.prototype.createLDAPLink = function (groupId, options) {
        var gId = encodeURIComponent(groupId);
        return infrastructure_1.RequestHelper.post(this, "groups/" + gId + "/ldap_group_links", options);
    };
    Groups.prototype.edit = function (groupId, options) {
        var gId = encodeURIComponent(groupId);
        return infrastructure_1.RequestHelper.put(this, "groups/" + gId, options);
    };
    Groups.prototype.remove = function (groupId) {
        var gId = encodeURIComponent(groupId);
        return infrastructure_1.RequestHelper.delete(this, "groups/" + gId);
    };
    Groups.prototype.search = function (nameOrPath) {
        return infrastructure_1.RequestHelper.get(this, 'groups', {
            search: nameOrPath,
        });
    };
    Groups.prototype.show = function (groupId) {
        var gId = encodeURIComponent(groupId);
        return infrastructure_1.RequestHelper.get(this, "groups/" + gId);
    };
    Groups.prototype.subgroups = function (groupId, options) {
        var gId = encodeURIComponent(groupId);
        return infrastructure_1.RequestHelper.get(this, "groups/" + gId + "/subgroups", options);
    };
    return Groups;
}(infrastructure_1.BaseService));
exports.default = Groups;