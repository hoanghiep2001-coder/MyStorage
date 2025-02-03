import { Constants } from "../Data/constants";
import AStar from "./Astar";
import { Grid } from "./Grid";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PathFinding extends cc.Component {

    @property(cc.Node)
    target: cc.Node = null;

    @property([cc.Node])
    nodesToMove: cc.Node[] = [];

    isStartFindPath: boolean = false;

    private grid: Grid;
    private astar: AStar;

    protected onLoad(): void {
        // Khởi tạo Grid và AStar
        this.grid = new Grid(20); // Khởi tạo grid với kích thước 10x10, ví dụ
        this.astar = new AStar(this.grid);
    }

    protected start(): void {
 
    }


    startFindPAth(): void {
        if(this.isStartFindPath) return;

        this.isStartFindPath = true;
        this.setupGridObstacles();
        this.findPaths();
    }


    private setupGridObstacles(): void {
        // Ví dụ: Đặt vật cản trong grid
        this.grid.setObstacle(3, 3);
        this.grid.setObstacle(4, 4);
        // Thêm vật cản khác nếu cần
    }

    private findPaths(): void {
        const targetPosition = this.grid.getNodePosition(this.target);

        this.nodesToMove.forEach(node => {
            const startPosition = this.grid.getNodePosition(node);

            const path = this.astar.findPath(startPosition, targetPosition);

            this.moveNodeAlongPath(node, path);
        });
    }

    private moveNodeAlongPath(node: cc.Node, path: { x: number, y: number }[]): void {
        if (path.length === 0) return;

        let index = 0;
        const moveStep = () => {
            if (index < path.length) {
                const { x, y } = path[index];
                const position = this.grid.getWorldPosition(x, y);

                cc.tween(node)
                    .to(1, { position: position })
                    .call(() => {
                        index++;
                        moveStep();
                    })
                    .start();
            }
        };

        moveStep();
    }


    protected update(dt: number): void {
        if (window.isDraw && !Constants.isWinGame) {
            this.startFindPAth();
        }
    }
}
