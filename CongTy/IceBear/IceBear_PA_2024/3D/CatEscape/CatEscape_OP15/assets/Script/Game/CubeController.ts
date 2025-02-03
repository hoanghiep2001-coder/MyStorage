
import { _decorator, Component, Node, RigidBody } from 'cc';
import { Constants } from '../Data/Constant';
const { ccclass, property } = _decorator;

 
@ccclass('CubeController')
export class CubeController extends Component {

    @property([Node])
    Cubes: Node[] = [];

    changeTypeFlag: boolean = false;

    protected start(): void {
        this.Cubes.forEach(cube => {
            let rigdbody = cube.getComponent(RigidBody);
            rigdbody.type = RigidBody.Type.STATIC;
        });
    }


    private changeRigidType(): void {
        this.changeTypeFlag = true;
        this.Cubes.forEach(cube => {
            let rigdbody = cube.getComponent(RigidBody);
            rigdbody.type = RigidBody.Type.DYNAMIC;
            rigdbody.mass = 0.0001;
        });
    }


    protected update(dt: number): void {
        !this.changeTypeFlag && Constants.isEatFood && this.changeRigidType();
    }

}

