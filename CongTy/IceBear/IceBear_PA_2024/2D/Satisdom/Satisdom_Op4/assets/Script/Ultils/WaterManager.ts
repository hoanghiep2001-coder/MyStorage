import TubeController from "../Controller/TubeController";
import { Constants } from "../Data/constants";
import BottleItem from "./BottleItem";

const {ccclass, property} = cc._decorator;

const transparentColor: cc.Color = cc.color(255, 255, 255, 0);

const decreaseWater = (floorToDecrease: number, indexOfFirstColor: number, tube: BottleItem): void => {

    cc.log("bottle down");
    cc.log("decreaseFloor: " + floorToDecrease);
    cc.log("indexOfFirstColor: " + indexOfFirstColor);
    

    const comebackInitPos = () => {
        let backPos = new cc.Vec3(tube.initPos.x, tube.initPos.y, 0);

        cc.tween(tube.node)
        .to(0.5, {position: backPos, angle: 0})
        .call(() => {
            Constants.isCanTouch = true;

            cc.log("Done Sort");
        })
        .start();
    }

    const decreaseTwoFloor = () => {
        let color1 = tube.spriteColors[0].node;
        let color2 = tube.spriteColors[1].node;

        cc.tween(color1)
        .to(0.35, {height: 0})
        .call(() => {
            color1.color = transparentColor;
            color1.height = 0;
            tube.waterColors[0] = transparentColor;

            cc.tween(color2)
            .to(0.35, {height: 0})
            .call(() => {
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

    const decreaseTwoFloorWithException = () => {
        let color2 = tube.spriteColors[1].node;
        let color3 = tube.spriteColors[2].node;
        
        cc.tween(color2)
        .to(0.35, {height: 0})
        .call(() => {
            color2.color = transparentColor;
            color2.height = 0;
            tube.waterColors[1] = transparentColor;

            cc.tween(color3)
            .to(0.35, {height: 0})
            .call(() => {
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

    const decreaseOneFloor = () => {
        let color3 = tube.spriteColors[2].node;

        cc.tween(color3)
        .to(0.7, {height: 0})
        .call(() => {
            color3.color = transparentColor;
            color3.height = 0;
            tube.waterColors[2] = transparentColor;

            tube.applyWaterColor();
            comebackInitPos();
        })
        .start();
    };

    const decreaseOneFloorWithException = () => {
        let color4 = tube.spriteColors[3].node;

        cc.tween(color4)
        .to(0.7, {height: 0})
        .call(() => {
            color4.color = transparentColor;
            color4.height = 0;
            tube.waterColors[3] = transparentColor;

            tube.applyWaterColor();
            comebackInitPos();
        })
        .start();
    };

    const decreaseThreeFloor = () => {
        let color3 = tube.spriteColors[2].node;
        let color2 = tube.spriteColors[1].node;
        let color1 = tube.spriteColors[0].node;

        cc.tween(color1)
        .to(0.23333333333, {height: 0})
        .call(() => {
            color1.color = transparentColor;
            color1.height = 0;
            tube.waterColors[0] = transparentColor;

            cc.tween(color2)
            .to(0.23333333333, {height: 0})
            .call(() => {
                color2.color = transparentColor;
                color2.height = 0;
                tube.waterColors[1] = transparentColor;

                cc.tween(color3)
                .to(0.23333333333, {height: 0})
                .call(() => {
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

    const decreaseThreeFloorWithException = () => {
        let color4 = tube.spriteColors[3].node;
        let color3 = tube.spriteColors[2].node;
        let color2 = tube.spriteColors[1].node;

        cc.tween(color2)
        .to(0.23333333333, {height: 0})
        .call(() => {
            color2.color = transparentColor;
            color2.height = 0;
            tube.waterColors[1] = transparentColor;

            cc.tween(color3)
            .to(0.23333333333, {height: 0})
            .call(() => {
                color3.color = transparentColor;
                color3.height = 0;
                tube.waterColors[2] = transparentColor;

                cc.tween(color4)
                .to(0.23333333333, {height: 0})
                .call(() => {
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

    if(indexOfFirstColor === 0 && floorToDecrease === 2) {decreaseTwoFloor(); return}
    if(indexOfFirstColor === 1 && floorToDecrease === 2) {decreaseTwoFloorWithException(); return}
    if(indexOfFirstColor === 2 && floorToDecrease === 1) {decreaseOneFloor(); return}
    if(indexOfFirstColor === 3 && floorToDecrease === 1) {decreaseOneFloorWithException(); return}
    if(indexOfFirstColor === 0 && floorToDecrease === 3) {decreaseThreeFloor(); return}
    if(indexOfFirstColor === 1 && floorToDecrease === 3) {decreaseThreeFloorWithException(); return}
};


const increaseWater = (floorToIncrease: number, colorToIncrease: cc.Color, currentFloor: number, tube: BottleItem): void => {
    cc.log("bottle up");
    cc.log("increaseFloor: " + floorToIncrease);
    cc.log("currentFloor: " + currentFloor);

    const activeParticle = () => {
        tube.AudioManager.playSound(Constants.SoundTrack.winSound);
        tube.PS_Star.resetSystem();
    }

    const increaseTwoFloor = () => {
        let color1 = tube.spriteColors[0].node;
        let color2 = tube.spriteColors[1].node;

        color1.color = colorToIncrease;
        color1.opacity = 255;
        color1.height = 0;
        color2.color = colorToIncrease;
        color2.opacity = 255;
        color2.height = 0;

        cc.tween(color2)
        .to(0.35, {height: 200})
        .call(() => {
            tube.waterColors[1] = colorToIncrease;

            cc.tween(color1)
            .to(0.35, {height: 210})
            .call(() => {
                tube.waterColors[0] = colorToIncrease;
                activeParticle();
            })
            .start();
        })
        .start();
    };

    const increaseTwoFloorWithException = () => {
        let color3 = tube.spriteColors[2].node;
        let color2 = tube.spriteColors[1].node;

        color3.color = colorToIncrease;
        color3.opacity = 255;
        color3.height = 0;
        color2.color = colorToIncrease;
        color2.opacity = 255;
        color2.height = 0;

        cc.tween(color3)
        .to(0.35, {height: 250})
        .call(() => {
            tube.waterColors[2] = colorToIncrease;

            cc.tween(color2)
            .to(0.35, {height: 200})
            .call(() => {
                tube.waterColors[1] = colorToIncrease;
                activeParticle();
            })
            .start();
        })
        .start();
    };

    const increaseOneFloor = () => {
        let color2 = tube.spriteColors[1].node;

        color2.color = colorToIncrease;
        color2.opacity = 255;
        color2.height = 0;

        cc.tween(color2)
        .to(0.7, {height: 200})
        .call(() => {
            tube.waterColors[1] = colorToIncrease;
            activeParticle();
        })
        .start();
    };

    const increaseOneFloorWithException = () => {
        let color1 = tube.spriteColors[0].node;

        color1.color = colorToIncrease;
        color1.opacity = 255;
        color1.height = 0;

        cc.tween(color1)
        .to(0.7, {height: 210})
        .call(() => {
            tube.waterColors[0] = colorToIncrease;
            activeParticle();
        })
        .start();
    };

    const increaseThreeFloor = () => {
        let color3 = tube.spriteColors[2].node;
        let color2 = tube.spriteColors[1].node;
        let color1 = tube.spriteColors[0].node;

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
        .to(0.23333, {height: 250})
        .call(() => {

            cc.tween(color2)
            .to(0.23333, {height: 200})
            .call(() => {

                cc.tween(color1)
                .to(0.23333, {height: 210})
                .call(() => {
                    activeParticle();
                })
                .start();
            })

            .start();
        })
        .start();
    };

    const increaseThreeFloorWithException = () => {
        let color4 = tube.spriteColors[3].node;
        let color3 = tube.spriteColors[2].node;
        let color2 = tube.spriteColors[1].node;

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
        .to(0.23333, {height: 350})
        .call(() => {

            cc.tween(color3)
            .to(0.23333, {height: 250})
            .call(() => {

                cc.tween(color2)
                .to(0.23333, {height: 200})
                .call(() => {
                    activeParticle();
                })
                .start();
            })

            .start();
        })
        .start();
    };

    if(floorToIncrease === 2 && currentFloor === 2) {increaseTwoFloor(); return}
    if(floorToIncrease === 2 && currentFloor === 3) {increaseTwoFloorWithException(); return}
    if(floorToIncrease === 1 && currentFloor === 2) {increaseOneFloor(); return}
    if(floorToIncrease === 1 && currentFloor === 1) {increaseOneFloorWithException(); return}
    if(floorToIncrease === 3 && currentFloor === 3) {increaseThreeFloor(); return}
    if(floorToIncrease === 3 && currentFloor === null) {increaseThreeFloorWithException(); return}
};


export class WaterManager {
    static decreaseWater: typeof decreaseWater = decreaseWater;
    static increaseWater: typeof increaseWater = increaseWater;
}
