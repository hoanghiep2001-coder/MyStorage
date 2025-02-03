
cc.Class({
    extends: cc.Component,

    properties: {
       Main: require('Main'),
       Res: require('Res'),
    },

    onLoad () {

    },

    onBeginContact(contact, selfCollider, otherCollider) {
        if(otherCollider.node._name == 'Round') {
            this.Main.FlagStatus = "Round";
        }
        
        if(otherCollider.node._name == 'man1') {
            this.Main.FlagStatus = "God";
            this.Res.FlagMove = false;
            this.Res.FlagStatus = 'Lose';
            setTimeout(() => {
                this.Res.Flag_Done = true;
            }, 500);
        }
    },
    // onEndContact(contact, selfCollider, otherCollider) {
    //     if(otherCollider.node._name == 'Round') {
    //         this.Main.FlagStatus = false;
    //     }
        
    //     if(otherCollider.node._name == 'god') {
    //         this.Main.FlagStatus = false;
    //     }
    // }

    // update (dt) {},
});
