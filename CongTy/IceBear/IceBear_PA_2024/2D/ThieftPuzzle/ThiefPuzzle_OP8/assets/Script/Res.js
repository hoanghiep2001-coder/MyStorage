
cc.Class({
    extends: cc.Component,

    properties: {

        ViewNgang: cc.Node,

        ViewDoc: cc.Node,

        ClickStoreNode: cc.Node,

        ToStore: require('ToStore'),

        // 
        AudioBg: cc.AudioClip,

    },

    onLoad() {

        this.ClickStoreNode.on(cc.Node.EventType.TOUCH_START, this.ToStoreFn, this);
        this.FlagAudio = true;
        this.ironSourceState = 1;
        this.ironSourceSoundState = true;
        this.isEndGame = false;
        this.Flag_Done = false;
        this.FlagAudiohaha = true;
        // this.StartAudio();
    },

    ToStoreFn() {
        this.ToStore.installHandle();
    },

    StartAudio() {
        if (this.FlagAudio) {
            if (this.ironSourceSoundState) {
                this.FlagAudio = false;
                // cc.audioEngine.play(this.AudioBg, true, 0.6);
            }
        }
    },

    update(dt) {
        let screenW = cc.winSize.width;
        let screenH = cc.winSize.height;

        if (screenW < screenH) {
            this.ViewDoc.active = true;
            this.ViewNgang.active = false;
        } else {
            this.ViewDoc.active = false;
            this.ViewNgang.active = true;
        }

        this.ironSourceState = parseInt(localStorage.getItem("cocosSoundState"), 10)
        if (this.ironSourceState) {
            if (this.ironSourceState === 1 && !this.ironSourceSoundState && !this.isEndGame) {
                this.ironSourceSoundState = true;
                cc.audioEngine.play(this.AudioBg, true, 1);
            }

            if (this.ironSourceState === 2 && this.ironSourceSoundState) {
                this.ironSourceSoundState = false;
                cc.audioEngine.stopAll();
            }
        }

        if (this.Flag_Done) {
            // this.ClickStoreNode.active = true;
        }
    },
});
