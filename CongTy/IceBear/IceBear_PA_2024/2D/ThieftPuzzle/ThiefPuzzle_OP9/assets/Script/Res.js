
cc.Class({
    extends: cc.Component,

    properties: {
        ViewNgang: cc.Node,
        ViewDoc: cc.Node,
        viewDocGirlRigidbody: cc.Node,
        viewNgangGirlRigidbody: cc.Node,

        ClickStoreOverlay_1: cc.Node,
        ClickStoreOverlay_2: cc.Node,
        ClickStoreNode: cc.Node,
        ToStore: require('ToStore'),

        // hiep config
        girl_doc: cc.Node,
        round_doc: cc.Node,
        hand_doc: cc.Node,

        // 
        AudioBg: cc.AudioClip,

        HORIZONTAL: "horizontal",
        VERTICAL: "vertical",
        device: "",
        isRotate: false,

    },

    onLoad() {
        // mtg & applovin
        // this.ClickStoreOverlay_1.on(cc.Node.EventType.TOUCH_START, this.ToStoreFn, this);
        // this.ClickStoreOverlay_2.on(cc.Node.EventType.TOUCH_START, this.ToStoreFn, this);

        this.ClickStoreNode.on(cc.Node.EventType.TOUCH_START, this.ToStoreFn, this);
        this.FlagAudio = true;
        this.ironSourceState = 1;
        this.ironSourceSoundState = true;
        this.isEndGame = false;
        this.Flag_Done = false;
        this.FlagAudiohaha = true;
        this.FlagMove = true;
        this.FlagStatus = false;
        // this.StartAudio();
    },

    ToStoreFn() {
        this.ToStore.installHandle();
    },

    StartAudio() {
        if (this.FlagAudio) {
            if (this.ironSourceSoundState) {
                this.FlagAudio = false;
                cc.audioEngine.play(this.AudioBg, true, 0.8);
            }
        }
    },

    update(dt) {
        let screenW = cc.winSize.width;
        let screenH = cc.winSize.height;

        if (screenW < screenH) {
            if (this.VERTICAL === this.device) {
                return;
            }
    
            this.device = this.VERTICAL;
            // this.viewNgangGirlRigidbody.getComponent(cc.RigidBody).enabled = false;
            this.ViewDoc.active = true;
            this.ViewNgang.active = false;

            if(cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
                // IPX
                this.ViewDoc.scale = 0.8;
                this.girl_doc.y = -192;
                this.round_doc.x = -70;
                this.hand_doc.x = 129;
                this.hand_doc.y = 85;
            }

            // this.viewDocGirlRigidbody.getComponent(cc.RigidBody).enabled = true;
        } else {
            if (this.HORIZONTAL === this.device) {
                return;
            }
    
            this.device = this.HORIZONTAL;
            // this.viewDocGirlRigidbody.getComponent(cc.RigidBody).enabled = false;
            this.ViewDoc.active = false;
            this.ViewNgang.active = true;
            // this.viewNgangGirlRigidbody.getComponent(cc.RigidBody).enabled = true;
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
            this.ClickStoreNode.active = true;
        }
    },
});
