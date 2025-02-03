import { _decorator, Component, instantiate, log, Node, Prefab, SkeletalAnimation } from 'cc';
import { GameInfo } from '../Const/GameInfo';
import { CONST } from '../Const/CONST';
import Singleton from '../Utils/Singleton';
const { ccclass, property } = _decorator;


@ccclass('RoboController')
export class RoboController extends Singleton<RoboController> {

    constructor() {
        super();
        RoboController._instance = this;
    }


    protected start(): void {

    }


    protected update(dt: number): void {
     
    }
}

