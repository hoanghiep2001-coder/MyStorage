import { _decorator, log, Animation, Component, gfx, Node, Camera, tween, Vec2, Vec3, director, SkeletalAnimation, Rect, UITransform, math, Sprite, Material, macro, InstanceMaterialType, misc, effects, EffectAsset, Texture2D, resources, RenderableComponent, easing } from 'cc';
const { ccclass, property } = _decorator;
import { GameController } from './GameController';
import { AudioManager } from './AudioManager';
import { Constants } from '../Data/constants';
import { UIController } from './UIController';
import { GameCommon } from '../Data/GameCommon';


@ccclass('GamePlay')
export class GamePlay extends Component {
    // Component
    @property(UIController)
    UIController: UIController = null;
    @property(GameController)
    GameController: GameController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;

    @property(EffectAsset)
    DissolveEffect: EffectAsset = null;
    @property(Texture2D)
    DissolveTexture: Texture2D = null;

    // state

    protected start(): void {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);

        Constants.isDissolveIn = true;
        Constants.targetNode = this.UIController.Warpper;
        this.addHintMaterials();
        this.addDecorItemsMaterial();
    }


    private addHintMaterials(): void {
        this.UIController.Warpper.getChildByName("Hint").children
            .forEach((hint, index) => {
                hint.getComponent(Sprite).customMaterial = this.UIController.HintMaterials[index];
            });
    };


    private addDecorItemsMaterial(): void {
        this.UIController.Warpper.getChildByName("Decor").children
            .forEach((item, index) => {
                item.getComponent(Sprite).customMaterial = this.UIController.Materials[index];
            });
    };


    private dissolveSprite(node: Node): void {
        let sprite = node.getComponent(Sprite);
        let material = sprite.customMaterial;
        material.setProperty('dissolveThreshold', Constants.currentDissolveInPercent);
    }


    public updateProgress(): void {
        let progressScale = this.UIController.Progress.scale;

        tween(this.UIController.Progress)
            .to(0.5, {
                scale: new Vec3((Constants.dissolvedItemNumber - 2) / 18,
                    progressScale.y, progressScale.z)
            }, { easing: easing.elasticOut })
            .start();

        log("---- update progress!!");
    };


    public filterSameArea(itemName: string): void {
        Constants.sameArea = this.UIController.ImpactArea.getChildByName(itemName);

        Constants.targetNode = this.UIController.Warpper
            .getChildByName("Decor")
            .getChildByName(itemName);
    }


    private handleMuteSoundIronSource(): void {
        Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

        if (Constants.ironSource.State) {
            if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
                Constants.ironSource.SoundState = true;
            }

            if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
                Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    }


    public handleIronSourcePlaySound(): void {
        if (Constants.ironSource.isPlayBgSound) {
            return;
        }

        if (Constants.ironSource.SoundState) {
            this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        }

        Constants.ironSource.isPlayBgSound = true;
    }


    private dissolveIn(): void {
        if (Constants.currentDissolveInPercent <= 0) {

            Constants.targetNode.getComponent(Sprite).customMaterial = null;
            Constants.targetNode = null;
            Constants.isDissolveIn = false;
            Constants.currentDissolveInPercent = 1;
            Constants.dissolvedItemNumber += 1;

            // fix opening game, force user wait to the hint show full, then can play game
            if (Constants.dissolvedItemNumber >= 2) Constants.isCanClick = true;

            // show first hint after dissolve background done
            if (!Constants.isDissolveFirstTime) {
                Constants.isDissolveFirstTime = true;
                Constants.isDissolveIn = true;
                Constants.targetNode = this.UIController.Hints[0];
                return;
            }

            // check done hint every done 1 dissolve spirte
            this.checkDoneHint();

            this.UIController.Tutorial.active = true;

            // this.AudioManager.playSound(Constants.SoundTrack.matchSound);

            return;
        }

        Constants.isCanClick = false;
        this.dissolveSprite(Constants.targetNode)
        Constants.currentDissolveInPercent -= 0.01;
    }


    private checkDoneHint(): void {

        // --  done hint 1  --------
        if (Constants.dissolvedItemNumber === 7) {
            GameCommon.currentStep = 2;

            this.UIController.Hints[0].active = false;

            Constants.isDissolveIn = true;

            Constants.targetNode = this.UIController.Hints[1];

            this.AudioManager.playSound(Constants.SoundTrack.NextStepSound);
        }


        if (Constants.dissolvedItemNumber === 12) {
            GameCommon.currentStep = 3;

            this.UIController.Hints[1].active = false;

            Constants.isDissolveIn = true;

            Constants.targetNode = this.UIController.Hints[2];

            this.AudioManager.playSound(Constants.SoundTrack.NextStepSound);
        }


        if (Constants.dissolvedItemNumber === 18) {
            GameCommon.currentStep = 4;

            this.UIController.Hints[2].active = false;

            Constants.isDissolveIn = true;

            Constants.targetNode = this.UIController.Hints[3];

            this.AudioManager.playSound(Constants.SoundTrack.NextStepSound);
        }

        this.updateProgress();
    }


    protected update(dt: number): void {
        Constants.isDissolveIn && this.dissolveIn();

        // ironsource
        this.handleMuteSoundIronSource();
    }
}
