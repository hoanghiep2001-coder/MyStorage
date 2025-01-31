import ListTestItem from "./list-test-item";

const { ccclass,  property } = cc._decorator;

@ccclass
export class TestScene extends cc.Component {

    @property({type:cc.Prefab})
    listTestItemPrefab:cc.Prefab = null;

    @property({type:cc.Node})
    listContent:cc.Node = null;

    @property({type:[cc.SpriteFrame]})
    flagSpriteFrames:cc.SpriteFrame[] = [];

    @property
    listItemMax:number = 200;

    start() {
        for(let i = 0; i < this.listItemMax; i++){
            let node = cc.instantiate(this.listTestItemPrefab);
            node.parent = this.listContent;
            let item = node.getComponent(ListTestItem);
            item?.randomData(i + 1, this.flagSpriteFrames[Math.floor(Math.random() * this.flagSpriteFrames.length)])
        }
    }
}
