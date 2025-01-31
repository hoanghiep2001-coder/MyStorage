import { _decorator, Component, easing, Graphics, Label, log, Node, tween, UITransform, Vec3 } from 'cc';
import { GameInfo } from '../Const/GameInfo';
import { SoundController } from '../Controller/SoundController';
import { CONST } from '../Const/CONST';
const { ccclass, property } = _decorator;


/**
 * Predefined variables
 * Name = HandleLogicGamePlay
 * DateTime = Tue Aug 27 2024 15:51:28 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = HandleLogicGamePlay.ts
 * FileBasenameNoExtension = HandleLogicGamePlay
 * URL = db://assets/Scripts/Others/HandleLogicGamePlay.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
*/


const CheckGameResult = (): boolean => {
    let result: boolean = false;

    if(Number(GameInfo.currentBankingInput) === GameInfo.currentTotalCost) return true;

    if(GameInfo.currentDollarGive === GameInfo.currentChange 
        && GameInfo.currentCenGive === 0
    ) result = true;

    return result;
}


export class LogicGamePlay {
    static CheckGameResult = CheckGameResult;

    // static HandleDrawGraphics = HandleDrawGraphics;

    // static HandleClearGraphics = HandleClearGraphics;

    // static mergeRobo = mergeRobo;

    // static resetRobos = resetRobos;
}

