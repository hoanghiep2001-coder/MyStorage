import { _decorator, Component, Graphics, Node } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('HandleGraphics')
export class HandleGraphics extends Component {




    protected start(): void {
        this.registerEvent();
    }


    private registerEvent(): void {
        let graphics = this.node.getComponent(Graphics);
    }

}

