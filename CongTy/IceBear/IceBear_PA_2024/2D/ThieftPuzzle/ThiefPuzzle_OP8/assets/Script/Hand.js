
cc.Class({
    extends: cc.Component,

    properties: {
       Main: require('Main'),
    },

    onLoad () {

    },

    onBeginContact(contact, selfCollider, otherCollider) {
        if(otherCollider.node._name == 'Round') {
            this.Main.FlagStatus = "Round";
        }
        
        if(otherCollider.node._name == 'god') {
            this.Main.FlagStatus = "God";
        }
    },

    onEndContact(contact, selfCollider, otherCollider) {
        if(otherCollider.node._name == 'Round') {
            this.Main.FlagStatus = false;
        }
        
        if(otherCollider.node._name == 'god') {
            this.Main.FlagStatus = false;
        }
    }

    // update (dt) {},
});
