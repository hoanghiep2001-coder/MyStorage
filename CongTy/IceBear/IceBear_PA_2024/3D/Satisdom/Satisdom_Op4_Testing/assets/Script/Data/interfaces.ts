import { Vec3 } from "cc"
import { BottleItem } from "../Game/Other/BottleItem";
import { NodeController } from "../Game/Controller/NodeController";

export interface colorStatus {
    firstColorOfTube: string | null,
    indexOfFirstColor: number | null,
    nonTransparentColorArr: string[] | null,
    heightOfFirstColor: number | null,
    isHasTwoSameColor: boolean | null
}

export interface tubeState {
    position: Vec3 | null,
    angle: number | null,
    firstColorOfTube: string | null,
    currentHeightOfColor: number | null,
    otherTube: BottleItem | null,
    drawWaterSide: string | null,
}


export interface heightObject {
    height: number | null,
}