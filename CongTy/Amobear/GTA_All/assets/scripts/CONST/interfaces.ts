import { Vec3, Node, Vec2 } from "cc";

export interface responsiveItem {
    Node: Node | null,
    Scale: Vec3 | null,
    Position: Vec3 | null,
}


export interface GTA_PA_08 {
    isRidingMoto: boolean | null,
    isHitBrakeBtn: boolean | null,
    isHitBrakeBtnFlag: boolean | null,
    isTouchCheckPointFlag: boolean | null,
    isHitDogeCopsBtn: boolean | null,
}


export interface GTA_PA_09 {
    isHitGetRewardBtn: boolean | null,
    isCharacterArrivedReWard: boolean | null,
}


export interface GTA_PA_10 {
    currentEnemyKilled: number | null,
    isShowInstallPopup: boolean | null,
}


export interface GTA_PA_11 {
    currentEnemyKilled: number | null,
    isShowInstallPopup: boolean | null,
    isDoneRotateCamera: boolean| null,
    isShowHealthBar: boolean | null,
    isCharacterDead: boolean | null,
}