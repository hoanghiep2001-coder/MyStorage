import { _decorator, Component, instantiate, log, Node, Prefab, SkeletalAnimation } from 'cc';
import { GameInfo } from '../Const/GameInfo';
import { CONST } from '../Const/CONST';
import Singleton from '../Utils/Singleton';
import { UIGameController } from './UIGameController';
import { RoboLevel } from '../Robo/RoboLevel';
import { RoboBehavior } from '../Robo/RoboBehavior';
import { RoboAnim } from '../Robo/RoboAnim';
import { RoboCollision } from '../Robo/RoboCollision';
const { ccclass, property } = _decorator;


/**
 * Predefined variables
 * Name = RoboController
 * DateTime = Tue Aug 27 2024 14:05:17 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = RoboController.ts
 * FileBasenameNoExtension = RoboController
 * URL = db://assets/Scripts/Controller/RoboController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */


@ccclass('RoboController')
export class RoboController extends Singleton<RoboController> {

    constructor() {
        super();
        RoboController._instance = this;
    }


    @property(UIGameController)
    UIGameController: UIGameController = null;


    @property(Prefab)
    Robo_Level1_Prefab: Prefab = null;
    @property(Prefab)
    Robo_Level2_Prefab: Prefab = null;
    @property(Prefab)
    Robo_Level3_Prefab: Prefab = null;
    @property(Prefab)
    UI_Robo_LevelPrefab: Prefab = null;

    @property(Node)
    Enemy_Robo: Node = null;
    @property(Node)
    Player_Robo: Node = null;

    Robo_Pos: Node[] = [];

    Enemy_RoboPos: Node[] = [];

    isShowPopupInstall: boolean = false;


    protected start(): void {
        this.Robo_Pos = this.Player_Robo.children;
        this.Enemy_RoboPos = this.Enemy_Robo.children;
        this.spawnRoboLevel_1();

        this.spawnRoboLevel_3();
    }


    private spawnRoboLevel_1(): void {
        let levelRobo: number = null;

        switch (GameInfo.currentOption) {
            case 12:
                levelRobo = 3;
                break;
            case 13:
                levelRobo = 1;
                break;
            default:
                break;
        }

        for (let index = 0; index < this.Robo_Pos.length; ++index) {
            const roboLv1 = instantiate(this.Robo_Level1_Prefab),
                node = this.Robo_Pos[index];

            // create Robo
            roboLv1.parent = node;
            roboLv1.name = String(roboLv1.name + `_${index + 1}`);
            GameInfo.playerStartGameRobo.push(roboLv1);

            // setup level robo
            const UI_level = instantiate(this.UI_Robo_LevelPrefab);
            UI_level.parent = this.UIGameController.RoboLevels;
            UI_level.name = String(roboLv1.name);

            const roboLevelComponent = UI_level.getComponent(RoboLevel);

            roboLevelComponent.showLevel(levelRobo, roboLv1);
            GameInfo.playerRoboLevelArr.push(UI_level);
        }
    }


    private spawnRoboLevel_3(): void {
        let level = 6;
        switch (GameInfo.currentOption) {
            case 12:
                level = 6;
                break;
            case 13:
                level = 10;
                break;
            default:
                break;
        }
        
        GameInfo.bossLevel = level;

        for (let index = 0; index < this.Enemy_RoboPos.length; index++) {
            const pos = this.Enemy_RoboPos[index];

            const roboLv3 = instantiate(this.Robo_Level3_Prefab);

            // create Robo
            let parent = pos;
            roboLv3.parent = parent;
            roboLv3.name = String("Boss");

            GameInfo.enemyStartGameRobo.push(roboLv3);

            // setup Boss Pos
            if(!GameInfo.bossPos) GameInfo.bossPos = roboLv3.worldPosition;

            // setup Level for robo
            const UI_level = instantiate(this.UI_Robo_LevelPrefab);
            UI_level.parent = this.UIGameController.RoboLevels;
            UI_level.name = String("Boss");

            const roboLevelComponent = UI_level.getComponent(RoboLevel);

            roboLevelComponent.showLevel(level, roboLv3);
        }
    }


    public spawnRoboLevel_2(level: number): void {
        const roboLv2 = instantiate(this.Robo_Level2_Prefab);

        // create Robo
        let parent = this.Robo_Pos.find(pos => pos.name === GameInfo.lastPointOfTouchEndRobo.name);
        roboLv2.parent = parent;

        // setup Level for robo
        const UI_level = instantiate(this.UI_Robo_LevelPrefab);
        UI_level.parent = this.UIGameController.RoboLevels;

        const roboLevelComponent = UI_level.getComponent(RoboLevel);
        
        roboLevelComponent.showLevel(level, roboLv2);
        GameInfo.roboMerged_Level = level;
    }


    private swtichAnimBoss(anim: string): void {
        this.isShowPopupInstall = true;

        GameInfo.enemyStartGameRobo.forEach(robo => {
            robo.getComponent(RoboBehavior).switchAnim(anim);
        })
    }


    protected update(dt: number): void {
        // if(GameInfo.isLose && !this.isShowPopupInstall) this.swtichAnimBoss(RoboAnim.Idle);
        // if(GameInfo.isWin && !this.isShowPopupInstall) this.swtichAnimBoss(RoboAnim.Die);
    }
}

