import { _decorator, Component, Node, Prefab, SpriteFrame, instantiate } from 'cc';
import { ListTestItem } from './list-test-item';
const { ccclass, type, property } = _decorator;

@ccclass('TestScene')
export class TestScene extends Component {

    @type(Prefab)
    listTestItemPrefab:Prefab = null;

    @type(Node)
    listContent:Node = null;

    @type([SpriteFrame])
    flagSpriteFrames:SpriteFrame[] = [];

    @property
    listItemMax:number = 200;

    start() {
        for(let i = 0; i < this.listItemMax; i++){
            let node = instantiate(this.listTestItemPrefab);
            node.parent = this.listContent;
            let item = node.getComponent(ListTestItem);
            item?.randomData(i + 1, this.flagSpriteFrames[Math.floor(Math.random() * this.flagSpriteFrames.length)])
        }
    }
}
