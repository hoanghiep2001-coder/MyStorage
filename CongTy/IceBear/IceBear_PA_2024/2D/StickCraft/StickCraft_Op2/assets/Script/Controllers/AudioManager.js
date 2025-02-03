
cc.Class({
    extends: cc.Component,

    properties: {
        bgSound: cc.AudioSource,
        hitSound: cc.AudioSource,
        dieSound: cc.AudioSource,
        getItemSound: cc.AudioSource,
        dashSound: cc.AudioSource,
        winSound: cc.AudioSource,
        runSound: cc.AudioSource,
        bladeSound: cc.AudioSource,
        bowSound: cc.AudioSource,
        hitBowSound: cc.AudioSource,
    },


    stopAllSound() {
        this.bgSound.stop();
        this.hitSound.stop();
        this.dieSound.stop();
        this.getItemSound.stop();
        this.dashSound.stop();
        this.winSound.stop();
        this.runSound.stop();
        this.bladeSound.stop();
        this.bowSound.stop();
        this.hitBowSound.stop();
    },


    start() {

    },


});
