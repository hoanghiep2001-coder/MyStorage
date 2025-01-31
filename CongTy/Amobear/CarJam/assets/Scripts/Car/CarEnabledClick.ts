
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('CarEnabledClick')
export class CarEnabledClick extends Component {

    isCarEnabledClick: boolean = true;

    start () {
        // [3]
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
