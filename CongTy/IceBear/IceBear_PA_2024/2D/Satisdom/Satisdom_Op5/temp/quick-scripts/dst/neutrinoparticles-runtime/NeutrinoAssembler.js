
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/neutrinoparticles-runtime/NeutrinoAssembler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7dd47KelZZLyadMohM05ouJ', 'NeutrinoAssembler');
// NeutrinoAssembler.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NeutrinoAssemblerWebGL_1 = require("./NeutrinoAssemblerWebGL");
var NeutrinoAssemblerJSB_1 = require("./NeutrinoAssemblerJSB");
var NeutrinoAssembler = CC_JSB ? NeutrinoAssemblerJSB_1.default : NeutrinoAssemblerWebGL_1.default;
exports.default = NeutrinoAssembler;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcTmV1dHJpbm9Bc3NlbWJsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBOEQ7QUFDOUQsK0RBQTBEO0FBRTFELElBQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyw4QkFBb0IsQ0FBQyxDQUFDLENBQUMsZ0NBQXNCLENBQUM7QUFDakYsa0JBQWUsaUJBQWlCLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV1dHJpbm9Bc3NlbWJsZXJXZWJHTCBmcm9tICcuL05ldXRyaW5vQXNzZW1ibGVyV2ViR0wnO1xyXG5pbXBvcnQgTmV1dHJpbm9Bc3NlbWJsZXJKU0IgZnJvbSAnLi9OZXV0cmlub0Fzc2VtYmxlckpTQic7XHJcblxyXG5jb25zdCBOZXV0cmlub0Fzc2VtYmxlciA9IENDX0pTQiA/IE5ldXRyaW5vQXNzZW1ibGVySlNCIDogTmV1dHJpbm9Bc3NlbWJsZXJXZWJHTDtcclxuZXhwb3J0IGRlZmF1bHQgTmV1dHJpbm9Bc3NlbWJsZXI7XHJcbiJdfQ==