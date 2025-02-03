export class Grid {
    private width: number;
    private height: number;
    private obstacles: Set<string> = new Set();
    private grid: number[][];

    // Constructor chỉ nhận một đối số là kích thước của lưới
    constructor(size: number) {
        this.width = size;
        this.height = size;
    }

    public setObstacle(x: number, y: number): void {
        this.obstacles.add(`${x},${y}`);
    }


      // Phương thức để lấy vị trí trên lưới từ tọa độ thế giới
      public getNodePosition(node: cc.Node): { x: number, y: number } {
        const position = node.position;
        // Chuyển đổi từ tọa độ thế giới về tọa độ lưới
        return {
            x: Math.floor(position.x / 32), // Giả sử kích thước mỗi ô là 32x32
            y: Math.floor(position.y / 32)
        };
    }

    // Phương thức để lấy tọa độ thế giới từ tọa độ lưới
    public getWorldPosition(x: number, y: number): cc.Vec3 {
        // Chuyển đổi từ tọa độ lưới về tọa độ thế giới
        return new cc.Vec3(x * 32, y * 32, 0); // Giả sử kích thước mỗi ô là 32x32
    }


    public isWalkable(x: number, y: number): boolean {
        return this.isInBounds(x, y) && this.grid[x][y] === 0;
    }

    public isInBounds(x: number, y: number): boolean {
        return x >= 0 && y >= 0 && x < this.grid.length && y < this.grid[0].length;
    }
}
