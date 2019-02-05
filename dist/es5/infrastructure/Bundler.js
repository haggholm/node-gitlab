"use strict";
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
function Bundler(services) {
    var combined = __assign({}, services);
    return /** @class */ (function () {
        function Bundle(baseOptions) {
            var _this = this;
            Object.keys(combined).forEach(function (serviceName) {
                _this[serviceName] = new combined[serviceName](baseOptions);
            });
        }
        return Bundle;
    }());
}
exports.default = Bundler;
