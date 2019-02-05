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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var infrastructure_1 = require("../infrastructure");
var SystemHooks = /** @class */ (function (_super) {
    __extends(SystemHooks, _super);
    function SystemHooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SystemHooks.prototype.add = function (url, options) {
        return infrastructure_1.RequestHelper.post(this, 'hooks', __assign({ url: url }, options));
    };
    SystemHooks.prototype.all = function (options) {
        return infrastructure_1.RequestHelper.get(this, 'hooks', options);
    };
    SystemHooks.prototype.edit = function (hookId, url, options) {
        var hId = encodeURIComponent(hookId);
        return infrastructure_1.RequestHelper.put(this, "hooks/" + hId, __assign({ url: url }, options));
    };
    SystemHooks.prototype.remove = function (
    // @ts-ignore 'projectId' is declared but its value is never read
    projectId, hookId) {
        var hId = encodeURIComponent(hookId);
        return infrastructure_1.RequestHelper.delete(this, "hooks/" + hId);
    };
    return SystemHooks;
}(infrastructure_1.BaseService));
exports.default = SystemHooks;