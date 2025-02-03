
import { _decorator, Component, Node, physics, PhysicsSystem } from 'cc';
import Singleton from './Singleton';
import { SoundController } from '../Controller/SoundController';
import { CONST } from '../Const/CONST';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = EnablePhysics
 * DateTime = Mon Aug 26 2024 14:15:46 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = EnablePhysics.ts
 * FileBasenameNoExtension = EnablePhysics
 * URL = db://assets/Scripts/Utils/EnablePhysics.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('EnablePhysics')
export class EnablePhysics extends Component {
    protected onLoad(): void {
        PhysicsSystem.instance.enable = true;
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
