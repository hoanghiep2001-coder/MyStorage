
import { _decorator, Color, Component, Material, Mesh, MeshRenderer, Node, utils, Vec3 } from 'cc';
import { GameInfo } from '../../../CONST/GameInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PA_30_LineRenderer
 * DateTime = Sat Dec 28 2024 16:20:04 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = PA_30_LineRenderer.ts
 * FileBasenameNoExtension = PA_30_LineRenderer
 * URL = db://assets/Script/Options/PA_30/GamePlay/PA_30_LineRenderer.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('PA_30_LineRenderer')
export class PA_30_LineRenderer extends Component {
    private mesh: Mesh | null = null;
    private vertices: Vec3[] = [];
    private indices: number[] = [];
    private colors: Color[] = [];

    @property({ type: Material })
    lineMaterial: Material | null = null;


    points: Vec3[] = [];


    protected start(): void {
        const points = [
            new Vec3(0, 0, 0),
            new Vec3(1, 1, 0),
            new Vec3(2, 0, 1),
            new Vec3(3, -1, 2),
        ];

        this.createLine(points);
    }


    createLine(points: Vec3[]) {
        this.vertices = points;

        // Tạo indices (mỗi 2 điểm tạo 1 đoạn thẳng)
        this.indices = [];
        for (let i = 0; i < points.length - 1; i++) {
            this.indices.push(i, i + 1);
        }

        // Tạo màu cho từng điểm (tùy chọn)
        this.colors = points.map(() => new Color(255, 255, 255, 255));

        // Tạo Mesh
        this.mesh = utils.createMesh({
            positions: this.vertices.map(v => [v.x, v.y, v.z]).reduce((acc, val) => acc.concat(val), []),
            colors: this.colors.map(c => [c.r / 255, c.g / 255, c.b / 255, c.a / 255]).reduce((acc, val) => acc.concat(val), []),            
            indices: this.indices,
        });

        // Gán Mesh và Material vào MeshRenderer
        const meshRenderer = this.node.getComponent(MeshRenderer);
        if (meshRenderer) {
            meshRenderer.mesh = this.mesh;
            if (this.lineMaterial) {
                meshRenderer.material = this.lineMaterial;
            }
        }
    }


    protected update(dt: number): void {
        // if(GameInfo.Squid_PA_30.isDetachCandy) {
        //     this.createLine(GameInfo.Squid_PA_30.lineRenderPoints)
        // }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
