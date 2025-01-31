// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ListTestItem extends cc.Component {

    @property({type: cc.Label})
    rankText:cc.Label = null;

    @property({type: cc.Label})
    goldText:cc.Label = null;

    @property({type: cc.Sprite})
    flagImage:cc.Sprite = null;

    @property({type: cc.Label})
    levelText:cc.Label = null;
    
    @property({type: cc.ProgressBar})
    levelBar:cc.ProgressBar = null;
    
    @property({type: cc.Label})
    descText:cc.Label = null;
    
    @property({type: cc.Node})
    uiOpacity:cc.Node = null;
    
    randomData(index:number, flagSpriteFrame:cc.SpriteFrame){
        this.rankText.string = String(index);
        this.goldText.string = String(Math.floor(1000 + Math.random()* 1000));
        this.flagImage.spriteFrame = flagSpriteFrame;
        this.levelText.string = `lv.${Math.floor(Math.random()* 100)}`;
        this.levelBar.progress = Math.random();
        this.descText.string = `什么也没留下 - ${index}`;
        this.uiOpacity.opacity = 100 + Math.floor(Math.random() * 155);
    }
}
