
const {ccclass, property} = cc._decorator;

@ccclass
export default class RopeController extends cc.Component {

    @property(cc.Boolean)
    mouseJoint: boolean = false;
    @property(cc.Node)
    canvas: cc.Node = null;
    @property(cc.Size)
    size: cc.Size = cc.size(0,0);
 

    protected start(): void {
        let width   = this.size.width || this.canvas.width;
        let height  = this.size.height || this.canvas.height;

        // let node = new cc.Node();

        // let body = node.addComponent(cc.RigidBody);
        // body.type = cc.RigidBodyType.Static;

        // if (this.mouseJoint) {
        //     // add mouse joint
        //     let joint = node.addComponent(cc.MouseJoint);
        //     joint.mouseRegion = this.node;    
        // }

        // this.createBound(node, 0, height/2, width, 20);
        // this.createBound(node, 0, -height/2, width, 20);
        // this.createBound(node, -width/2, 0, 20, height);
        // this.createBound(node, width/2, 0, 20, height);

        // node.parent = this.node;
    }

    // private createBound(node, x, y, width, height): void {
    //     let collider = node.addComponent(cc.PhysicsBoxCollider);
    //     collider.offset.x = x;
    //     collider.offset.y = y;
    //     collider.size.width = width;
    //     collider.size.height = height;
    // }
}
