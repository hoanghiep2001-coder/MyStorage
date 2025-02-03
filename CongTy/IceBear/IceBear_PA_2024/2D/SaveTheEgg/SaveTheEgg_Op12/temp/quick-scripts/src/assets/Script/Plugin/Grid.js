"use strict";
cc._RF.push(module, '61538TfVY1GW6TtuV29v/v0', 'Grid');
// Script/Plugin/Grid.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var Grid = /** @class */ (function () {
    // Constructor chỉ nhận một đối số là kích thước của lưới
    function Grid(size) {
        this.obstacles = new Set();
        this.width = size;
        this.height = size;
    }
    Grid.prototype.setObstacle = function (x, y) {
        this.obstacles.add(x + "," + y);
    };
    // Phương thức để lấy vị trí trên lưới từ tọa độ thế giới
    Grid.prototype.getNodePosition = function (node) {
        var position = node.position;
        // Chuyển đổi từ tọa độ thế giới về tọa độ lưới
        return {
            x: Math.floor(position.x / 32),
            y: Math.floor(position.y / 32)
        };
    };
    // Phương thức để lấy tọa độ thế giới từ tọa độ lưới
    Grid.prototype.getWorldPosition = function (x, y) {
        // Chuyển đổi từ tọa độ lưới về tọa độ thế giới
        return new cc.Vec3(x * 32, y * 32, 0); // Giả sử kích thước mỗi ô là 32x32
    };
    Grid.prototype.isWalkable = function (x, y) {
        return this.isInBounds(x, y) && this.grid[x][y] === 0;
    };
    Grid.prototype.isInBounds = function (x, y) {
        return x >= 0 && y >= 0 && x < this.grid.length && y < this.grid[0].length;
    };
    return Grid;
}());
exports.Grid = Grid;

cc._RF.pop();