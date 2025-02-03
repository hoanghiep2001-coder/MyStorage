import BottleItem from "../Ultils/BottleItem";


export interface colorStatus {
    firstColorOfTube: string | null,
    indexOfFirstColor: number | null,
    nonTransparentColorArr: string[] | null,
    heightOfFirstColor: number | null,
    isHasTwoSameColor: boolean | null,
    numberOfDecreaseFloor: number | null,
    isHasThreeSameOneDiffColor: boolean | null,
    // numberOfIncreaseFloor: number | null,
}


export interface tubeState {
    position: cc.Vec3 | null,
    angle: number | null,
    firstColorOfTube: string | null,
    currentHeightOfColor: number | null,
    otherTube: BottleItem | null,
    drawWaterSide: string | null,
}


export interface heightObject {
    height: number | null,
}


export interface PointToDraw {
    MoveTo: cc.Vec2 | null,
    LineTo: cc.Vec2 | null,
}