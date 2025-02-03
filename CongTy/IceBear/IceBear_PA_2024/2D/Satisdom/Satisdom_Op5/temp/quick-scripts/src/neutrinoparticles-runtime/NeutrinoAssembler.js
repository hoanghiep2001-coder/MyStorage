"use strict";
cc._RF.push(module, '7dd47KelZZLyadMohM05ouJ', 'NeutrinoAssembler');
// NeutrinoAssembler.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NeutrinoAssemblerWebGL_1 = require("./NeutrinoAssemblerWebGL");
var NeutrinoAssemblerJSB_1 = require("./NeutrinoAssemblerJSB");
var NeutrinoAssembler = CC_JSB ? NeutrinoAssemblerJSB_1.default : NeutrinoAssemblerWebGL_1.default;
exports.default = NeutrinoAssembler;

cc._RF.pop();