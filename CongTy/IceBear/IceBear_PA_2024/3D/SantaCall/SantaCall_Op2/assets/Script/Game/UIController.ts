
import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIController')
export class UIController extends Component {

    @property(Label)
    time: Label = null;
    @property(Node)
    hand: Node = null;
    @property(Node)
    icons: Node = null;
    @property(Node)
    background: Node = null;
    @property(Node)
    Effect: Node = null;
    @property(Node)
    avatar: Node = null;
    @property(Node)
    avt_name: Node = null;
    
    protected start(): void {
        this.setupTime();
    }


    private setupTime(): void {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let result  = `${hour}:${minute}`;
        if(minute < 10) {
            result = `${hour}:0${minute}`;
        }
        this.time.string = result;
    }


}

