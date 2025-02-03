var AudioManager = require("AudioManager");

cc.Class({
    extends: cc.Component,

    properties: {
        AudioManager: AudioManager,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onEnable (){
        this.scheduleOnce(function() {
            this.disableCollision();
        }, 0.15);
    },

    // update (dt) {},

    disableCollision(){
        this.node.active = false;
    },

    onCollisionEnter: function (other, self) {
        cc.log("Attack Box Stick: " , other.node.group);
        window.isUsingSword && this.AudioManager.bladeSound.play();
        window.isUsingFist && this.AudioManager.hitSound.play();
        if(other.node.group == "Enemy"){
            console.log("Hit Enemy");
        }
    },
});
