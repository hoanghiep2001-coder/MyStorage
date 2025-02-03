
import { _decorator, Animation, Camera, Component, instantiate, Label, Node, Prefab, Vec3 } from 'cc';
import Singleton from '../Utility3D/Singleton';
const { ccclass, property } = _decorator;


@ccclass('ActiveComboCollideEdge')
export class ActiveComboCollideEdge extends Singleton<ActiveComboCollideEdge> {

    constructor() {
        super();
        ActiveComboCollideEdge._instance = this;
    }   

    @property(Camera)
    Camera: Camera = null;

    @property(Node)
    Canvas: Node = null;
    @property(Prefab)
    combo_collideTable: Prefab = null;


    comboCollide: number = 0;


    activeComboCollideTable(physicNode: Node): void {
        this.comboCollide += 1;
        const out = new Vec3();
        const wpos = physicNode.worldPosition;
        this.Camera.convertToUINode(wpos, this.Canvas, out);
        let node = instantiate(this.combo_collideTable);
        let label = node.getChildByName("Label").getComponent(Label);
        label.string = String(this.comboCollide);
        node.parent = this.Canvas;
        node.position = out;
        node.getComponent(Animation).play("CollideCombo");
    }
}

