import { Constants } from "../Data/constants";
import BottleItem from "../Ultils/BottleItem";
import GamePlay from "./GamePlay";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TubeController extends cc.Component {

    @property(GamePlay)
    GamePlay: GamePlay = null
    
    @property([BottleItem])
    BottleItems: BottleItem[] = [];

    StatusArr: boolean[] = [false, false, false, false];

    public blueColor: cc.Color = cc.color(28, 101, 170, 255);
    public brownColor: cc.Color = cc.color(161, 71, 71, 255);
    public orangeColor: cc.Color = cc.color(241, 116, 58, 255);
    public transparent: cc.Color = cc.color(255, 255, 255, 0);


    protected start(): void {
        this.initTubeColors();
    }


    private initTubeColors(): void {
        this.BottleItems[0].waterColors = [this.blueColor, this.blueColor, this.brownColor, this.blueColor]

        this.BottleItems[1].waterColors = [this.orangeColor, this.orangeColor, this.blueColor, this.brownColor]

        this.BottleItems[2].waterColors = [this.transparent, this.transparent, this.orangeColor, this.brownColor]

        this.BottleItems[3].waterColors = [this.transparent, this.transparent, this.brownColor, this.orangeColor]
    }


     hasMoreThanThreeTrueValues(array: boolean[]) {
        // Đếm số lượng phần tử true trong mảng
        const trueCount = array.filter(value => value === true).length;
    
        // Kiểm tra nếu số lượng phần tử true lớn hơn 3
        return trueCount > 3;
    }


    private isDoneGame(): void {
        for (let index = 0; index < this.BottleItems.length; index++) {
            const bottle = this.BottleItems[index];
            const colorToCompare = bottle.waterColors[0].toCSS();

            if(bottle.waterColors.every(color => color.toCSS() === colorToCompare)) this.StatusArr[index] = true;

            if(this.hasMoreThanThreeTrueValues(this.StatusArr)) this.GamePlay.showCTA(true);
        }
    }


    protected update(dt: number): void {
        !Constants.isShowCTA && this.isDoneGame();
    }

}
