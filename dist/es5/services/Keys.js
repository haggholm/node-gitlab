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
var Keys = /** @class */ (function (_super) {
    __extends(Keys, _super);
    function Keys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keys.prototype.show = function (keyId) {
        var kId = encodeURIComponent(keyId);
        return infrastructure_1.RequestHelper.get(this, "keys/" + kId);
    };
    return Keys;
}(infrastructure_1.BaseService));
exports.default = Keys;