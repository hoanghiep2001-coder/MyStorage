"use strict";
cc._RF.push(module, '445ff0MAbBAErU114KszySt', 'WaterManager');
// Script/Ultils/WaterManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterManager = void 0;
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var transparentColor = cc.color(255, 255, 255, 0);
var decreaseWater = function (floorToDecrease, indexOfFirstColor, tube) {
    cc.log("bottle down");
    cc.log("decreaseFloor: " + floorToDecrease);
    cc.log("indexOfFirstColor: " + indexOfFirstColor);
    var comebackInitPos = function () {
        var backPos = new cc.Vec3(tube.initPos.x, tube.initPos.y, 0);
        cc.tween(tube.node)
            .to(0.5, { position: backPos, angle: 0 })
            .call(function () {
            constants_1.Constants.isCanTouch = true;
            cc.log("Done Sort");
        })
            .start();
    };
    var decreaseTwoFloor = function () {
        var color1 = tube.spriteColors[0].node;
        var color2 = tube.spriteColors[1].node;
        cc.tween(color1)
            .to(0.35, { height: 0 })
            .call(function () {
            color1.color = transparentColor;
            color1.height = 0;
            tube.waterColors[0] = transparentColor;
            cc.tween(color2)
                .to(0.35, { height: 0 })
                .call(function () {
                color2.color = transparentColor;
                color2.height = 0;
                tube.waterColors[1] = transparentColor;
                tube.applyWaterColor();
                comebackInitPos();
            })
                .start();
        })
            .start();
    };
    var decreaseTwoFloorWithException = function () {
        var color2 = tube.spriteColors[1].node;
        var color3 = tube.spriteColors[2].node;
        cc.tween(color2)
            .to(0.35, { height: 0 })
            .call(function () {
            color2.color = transparentColor;
            color2.height = 0;
            tube.waterColors[1] = transparentColor;
            cc.tween(color3)
                .to(0.35, { height: 0 })
                .call(function () {
                color3.color = transparentColor;
                color3.height = 0;
                tube.waterColors[2] = transparentColor;
                tube.applyWaterColor();
                comebackInitPos();
            })
                .start();
        })
            .start();
    };
    var decreaseOneFloor = function () {
        var color3 = tube.spriteColors[2].node;
        cc.tween(color3)
            .to(0.7, { height: 0 })
            .call(function () {
            color3.color = transparentColor;
            color3.height = 0;
            tube.waterColors[2] = transparentColor;
            tube.applyWaterColor();
            comebackInitPos();
        })
            .start();
    };
    var decreaseOneFloorWithException = function () {
        var color4 = tube.spriteColors[3].node;
        cc.tween(color4)
            .to(0.7, { height: 0 })
            .call(function () {
            color4.color = transparentColor;
            color4.height = 0;
            tube.waterColors[3] = transparentColor;
            tube.applyWaterColor();
            comebackInitPos();
        })
            .start();
    };
    var decreaseThreeFloor = function () {
        var color3 = tube.spriteColors[2].node;
        var color2 = tube.spriteColors[1].node;
        var color1 = tube.spriteColors[0].node;
        cc.tween(color1)
            .to(0.23333333333, { height: 0 })
            .call(function () {
            color1.color = transparentColor;
            color1.height = 0;
            tube.waterColors[0] = transparentColor;
            cc.tween(color2)
                .to(0.23333333333, { height: 0 })
                .call(function () {
                color2.color = transparentColor;
                color2.height = 0;
                tube.waterColors[1] = transparentColor;
                cc.tween(color3)
                    .to(0.23333333333, { height: 0 })
                    .call(function () {
                    color3.color = transparentColor;
                    color3.height = 0;
                    tube.waterColors[2] = transparentColor;
                    tube.applyWaterColor();
                    comebackInitPos();
                })
                    .start();
            })
                .start();
        })
            .start();
    };
    var decreaseThreeFloorWithException = function () {
        var color4 = tube.spriteColors[3].node;
        var color3 = tube.spriteColors[2].node;
        var color2 = tube.spriteColors[1].node;
        cc.tween(color2)
            .to(0.23333333333, { height: 0 })
            .call(function () {
            color2.color = transparentColor;
            color2.height = 0;
            tube.waterColors[1] = transparentColor;
            cc.tween(color3)
                .to(0.23333333333, { height: 0 })
                .call(function () {
                color3.color = transparentColor;
                color3.height = 0;
                tube.waterColors[2] = transparentColor;
                cc.tween(color4)
                    .to(0.23333333333, { height: 0 })
                    .call(function () {
                    color4.color = transparentColor;
                    color4.height = 0;
                    tube.waterColors[3] = transparentColor;
                    tube.applyWaterColor();
                    comebackInitPos();
                })
                    .start();
            })
                .start();
        })
            .start();
    };
    if (indexOfFirstColor === 0 && floorToDecrease === 2) {
        decreaseTwoFloor();
        return;
    }
    if (indexOfFirstColor === 1 && floorToDecrease === 2) {
        decreaseTwoFloorWithException();
        return;
    }
    if (indexOfFirstColor === 2 && floorToDecrease === 1) {
        decreaseOneFloor();
        return;
    }
    if (indexOfFirstColor === 3 && floorToDecrease === 1) {
        decreaseOneFloorWithException();
        return;
    }
    if (indexOfFirstColor === 0 && floorToDecrease === 3) {
        decreaseThreeFloor();
        return;
    }
    if (indexOfFirstColor === 1 && floorToDecrease === 3) {
        decreaseThreeFloorWithException();
        return;
    }
};
var increaseWater = function (floorToIncrease, colorToIncrease, currentFloor, tube) {
    cc.log("bottle up");
    cc.log("increaseFloor: " + floorToIncrease);
    cc.log("currentFloor: " + currentFloor);
    var activeParticle = function () {
        tube.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
        tube.PS_Star.resetSystem();
    };
    var increaseTwoFloor = function () {
        var color1 = tube.spriteColors[0].node;
        var color2 = tube.spriteColors[1].node;
        color1.color = colorToIncrease;
        color1.opacity = 255;
        color1.height = 0;
        color2.color = colorToIncrease;
        color2.opacity = 255;
        color2.height = 0;
        cc.tween(color2)
            .to(0.35, { height: 200 })
            .call(function () {
            tube.waterColors[1] = colorToIncrease;
            cc.tween(color1)
                .to(0.35, { height: 210 })
                .call(function () {
                tube.waterColors[0] = colorToIncrease;
                activeParticle();
            })
                .start();
        })
            .start();
    };
    var increaseTwoFloorWithException = function () {
        var color3 = tube.spriteColors[2].node;
        var color2 = tube.spriteColors[1].node;
        color3.color = colorToIncrease;
        color3.opacity = 255;
        color3.height = 0;
        color2.color = colorToIncrease;
        color2.opacity = 255;
        color2.height = 0;
        cc.tween(color3)
            .to(0.35, { height: 250 })
            .call(function () {
            tube.waterColors[2] = colorToIncrease;
            cc.tween(color2)
                .to(0.35, { height: 200 })
                .call(function () {
                tube.waterColors[1] = colorToIncrease;
                activeParticle();
            })
                .start();
        })
            .start();
    };
    var increaseOneFloor = function () {
        var color2 = tube.spriteColors[1].node;
        color2.color = colorToIncrease;
        color2.opacity = 255;
        color2.height = 0;
        cc.tween(color2)
            .to(0.7, { height: 200 })
            .call(function () {
            tube.waterColors[1] = colorToIncrease;
            activeParticle();
        })
            .start();
    };
    var increaseOneFloorWithException = function () {
        var color1 = tube.spriteColors[0].node;
        color1.color = colorToIncrease;
        color1.opacity = 255;
        color1.height = 0;
        cc.tween(color1)
            .to(0.7, { height: 210 })
            .call(function () {
            tube.waterColors[0] = colorToIncrease;
            activeParticle();
        })
            .start();
    };
    var increaseThreeFloor = function () {
        var color3 = tube.spriteColors[2].node;
        var color2 = tube.spriteColors[1].node;
        var color1 = tube.spriteColors[0].node;
        color3.color = colorToIncrease;
        color3.opacity = 255;
        color3.height = 0;
        color2.color = colorToIncrease;
        color2.opacity = 255;
        color2.height = 0;
        color1.color = colorToIncrease;
        color1.opacity = 255;
        color1.height = 0;
        tube.waterColors[2] = colorToIncrease;
        tube.waterColors[1] = colorToIncrease;
        tube.waterColors[0] = colorToIncrease;
        cc.tween(color3)
            .to(0.23333, { height: 250 })
            .call(function () {
            cc.tween(color2)
                .to(0.23333, { height: 200 })
                .call(function () {
                cc.tween(color1)
                    .to(0.23333, { height: 210 })
                    .call(function () {
                    activeParticle();
                })
                    .start();
            })
                .start();
        })
            .start();
    };
    var increaseThreeFloorWithException = function () {
        var color4 = tube.spriteColors[3].node;
        var color3 = tube.spriteColors[2].node;
        var color2 = tube.spriteColors[1].node;
        color3.color = colorToIncrease;
        color3.opacity = 255;
        color3.height = 0;
        color2.color = colorToIncrease;
        color2.opacity = 255;
        color2.height = 0;
        color4.color = colorToIncrease;
        color4.opacity = 255;
        color4.height = 0;
        tube.waterColors[3] = colorToIncrease;
        tube.waterColors[2] = colorToIncrease;
        tube.waterColors[1] = colorToIncrease;
        cc.tween(color4)
            .to(0.23333, { height: 350 })
            .call(function () {
            cc.tween(color3)
                .to(0.23333, { height: 250 })
                .call(function () {
                cc.tween(color2)
                    .to(0.23333, { height: 200 })
                    .call(function () {
                    activeParticle();
                })
                    .start();
            })
                .start();
        })
            .start();
    };
    if (floorToIncrease === 2 && currentFloor === 2) {
        increaseTwoFloor();
        return;
    }
    if (floorToIncrease === 2 && currentFloor === 3) {
        increaseTwoFloorWithException();
        return;
    }
    if (floorToIncrease === 1 && currentFloor === 2) {
        increaseOneFloor();
        return;
    }
    if (floorToIncrease === 1 && currentFloor === 1) {
        increaseOneFloorWithException();
        return;
    }
    if (floorToIncrease === 3 && currentFloor === 3) {
        increaseThreeFloor();
        return;
    }
    if (floorToIncrease === 3 && currentFloor === null) {
        increaseThreeFloorWithException();
        return;
    }
};
var WaterManager = /** @class */ (function () {
    function WaterManager() {
    }
    WaterManager.decreaseWater = decreaseWater;
    WaterManager.increaseWater = increaseWater;
    return WaterManager;
}());
exports.WaterManager = WaterManager;

cc._RF.pop();