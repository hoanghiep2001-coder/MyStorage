"use strict";
cc._RF.push(module, '7e978dmCj1F/oDQ09VgYDVK', 'Anims');
// Script/Data/Anims.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpineAnims = void 0;
var Intro_SpiderAnim;
(function (Intro_SpiderAnim) {
    Intro_SpiderAnim["Action"] = "action01";
    Intro_SpiderAnim["Idle"] = "idle01";
})(Intro_SpiderAnim || (Intro_SpiderAnim = {}));
var Intro_DollAnim;
(function (Intro_DollAnim) {
    Intro_DollAnim["Walk"] = "action01";
    Intro_DollAnim["Scare"] = "action02";
    Intro_DollAnim["Idle"] = "idle0";
})(Intro_DollAnim || (Intro_DollAnim = {}));
var LipsAnim;
(function (LipsAnim) {
    LipsAnim["Dry"] = "action04";
    LipsAnim["DirtySmell"] = "action03";
    LipsAnim["Idle"] = "idle02";
})(LipsAnim || (LipsAnim = {}));
var bubbleAnim;
(function (bubbleAnim) {
    bubbleAnim["Clean"] = "action04_bubble_clean";
    bubbleAnim["Show"] = "action03_only_bubble";
})(bubbleAnim || (bubbleAnim = {}));
var waterToothAnim;
(function (waterToothAnim) {
    waterToothAnim["Idle"] = "Idle1";
    waterToothAnim["Action"] = "action01";
})(waterToothAnim || (waterToothAnim = {}));
var SpineAnims = /** @class */ (function () {
    function SpineAnims() {
    }
    SpineAnims.LipsAnim = LipsAnim;
    SpineAnims.Intro_DollAnim = Intro_DollAnim;
    SpineAnims.Intro_SpiderAnim = Intro_SpiderAnim;
    SpineAnims.bubbleAnim = bubbleAnim;
    SpineAnims.waterToothAnim = waterToothAnim;
    return SpineAnims;
}());
exports.SpineAnims = SpineAnims;

cc._RF.pop();