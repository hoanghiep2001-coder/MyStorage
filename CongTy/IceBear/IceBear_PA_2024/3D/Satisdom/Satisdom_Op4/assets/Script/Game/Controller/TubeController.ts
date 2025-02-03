import { _decorator, Color, Component, Graphics, Node } from 'cc';
import { BottleItem } from '../Other/BottleItem';

const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('TubeController')

@executeInEditMode
export class TubeController extends Component {

    @property([BottleItem])
    BottleItems: BottleItem[] = [];

    @property(Graphics)
    Graphics: Graphics = null;


    public blueColor: Color = new Color(28, 101, 170, 255);
    public brownColor: Color = new Color(161, 71, 71, 255);
    public orangeColor: Color = new Color(241, 116, 58, 255);
    public transparent: Color = new Color(255, 255, 255, 0);


    protected start(): void {
        this.BottleItems[0]._waterColors = [this.blueColor, this.brownColor, this.blueColor]

        this.BottleItems[1]._waterColors = [this.orangeColor, this.blueColor, this.brownColor]

        this.BottleItems[2]._waterColors = [this.transparent, this.brownColor, this.orangeColor]

        this.BottleItems[3]._waterColors = [this.transparent, this.orangeColor, this.brownColor]
    }

}
