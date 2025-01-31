
import { _decorator, Component, math, Node, Quat, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = NPC_Customer
 * DateTime = Sat Nov 23 2024 17:24:28 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = NPC_Customer.ts
 * FileBasenameNoExtension = NPC_Customer
 * URL = db://assets/Scripts/NPC/NPC_Customer.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('NPC_Customer')
export class NPC_Customer extends Component {

    @property([Node])
    skins: Node[] = [];

    protected start(): void {
        // this.schedule(() => {
                tween(this.node)
                .by(6.5, { position: new Vec3(6, 0, 0) })
                .to(0, { rotation: Quat.fromEuler(new Quat(), 0, -60, 0) })
                .by(6.5, { position: new Vec3(-6, 0, 0) })
                .to(0, { rotation: Quat.fromEuler(new Quat(), 0, 115, 0) })
                .call(() => {
                    this.skins.forEach(skin => skin.active = false);
                    let randomSkin = math.randomRangeInt(0, 4);
                    this.skins[randomSkin].active = true;   
                })
                .union()
                .repeatForever()
                .start();
            

      
        // }, 6);
   
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
