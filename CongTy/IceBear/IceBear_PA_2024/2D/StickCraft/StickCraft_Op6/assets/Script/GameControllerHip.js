
cc.Class({
    extends: cc.Component,

    properties: {
        
        //audio
        audioClick: cc.AudioClip,
        audioSword: cc.AudioClip,
        audioAncher: cc.AudioClip,
        audioHit: cc.AudioClip,
        audioBgMusic: cc.AudioClip,
        audioWalk: cc.AudioClip,
        audioWin: cc.AudioClip,
        audioCoin: cc.AudioClip,

    },


    onLoad () {
        //this.installButton.node.on("click", this.installHandle, this);

    },

    start () {
        window.gameReady && window.gameReady();
        cc.game.setFrameRate(60);
    },

    onFinish() {
        window.gameEnd && window.gameEnd();
    },

    playAudio(audio){
        if(audio === this.audioClick){
            cc.audioEngine.play(this.audioClick, false, 0.5)
        }else if(audio === this.audioSword){
            cc.audioEngine.play(this.audioSword, false, 0.5)
        }else if(audio === this.audioAncher){
            cc.audioEngine.play(this.audioAncher, false, 0.5)
        }else if(audio === this.audioHit){
            cc.audioEngine.play(this.audioHit, false, 0.5)
        }else if(audio === this.audioBgMusic){
            cc.audioEngine.play(this.audioBgMusic, true, 0.5)
        }else if(audio === this.audioWin){
            cc.audioEngine.play(this.audioWin, false, 0.5)
        }else if(audio === this.audioWalk){
            this.walk = cc.audioEngine.play(this.audioWalk, true, 0.5)
        }else if(audio === this.audioCoin){
            cc.audioEngine.play(this.audioCoin, false, 0.5)
        }
    },

    stopAudioWalk(){
        cc.audioEngine.stop(this.walk);
    },

    showPopupInstall(){
        this.onFinish();
    },

    stopAudio(){
        cc.audioEngine.stopAll();
    },


    installHandle (){
        this.playAudio(this.audioClick);
        this.stopAudio();

        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }
        
        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            cc.log("Call exit api")
            ExitApi.exit();
            return;
        }

        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            cc.log("Call dapi");
            dapi.openStoreUrl();
            return;
        }

        // If ad network support MRAID 2.0
        if (typeof(mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.an.stickman.craftbattle");
                return;
            }

            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/com.an.stickman.craftbattle?mt=8");
                //mraid.open("https://itunes.apple.com/us/app/id1627374569?mt=8");
                return;
            }

            mraid.open("https://play.google.com/store/apps/details?id=com.an.stickman.craftbattle");
            return;
        }
        // If ad network is mindword. window alway avaiable so skip undefined check
        window.install && window.install();
    },

});
