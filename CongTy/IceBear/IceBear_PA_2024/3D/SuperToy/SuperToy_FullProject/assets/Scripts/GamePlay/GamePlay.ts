import { _decorator, Component, director, Node, PhysicsSystem, view } from 'cc';
// import Responsive from '../Utils/Responsive';
const { ccclass, property } = _decorator;

 
@ccclass('GamePlay')
export class GamePlay extends Component {

    protected onLoad(): void {
        PhysicsSystem.instance.enable = true;
    }

    protected start(): void {

    };

}

