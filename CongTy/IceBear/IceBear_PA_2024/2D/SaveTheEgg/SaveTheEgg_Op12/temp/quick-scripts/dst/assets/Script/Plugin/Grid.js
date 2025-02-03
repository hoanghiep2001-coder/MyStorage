
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Grid.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFNSSx5REFBeUQ7SUFDekQsY0FBWSxJQUFZO1FBSmhCLGNBQVMsR0FBZ0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUt2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRU0sMEJBQVcsR0FBbEIsVUFBbUIsQ0FBUyxFQUFFLENBQVM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUksQ0FBQyxTQUFJLENBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHQyx5REFBeUQ7SUFDbEQsOEJBQWUsR0FBdEIsVUFBdUIsSUFBYTtRQUNsQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLCtDQUErQztRQUMvQyxPQUFPO1lBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDOUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDakMsQ0FBQztJQUNOLENBQUM7SUFFRCxvREFBb0Q7SUFDN0MsK0JBQWdCLEdBQXZCLFVBQXdCLENBQVMsRUFBRSxDQUFTO1FBQ3hDLCtDQUErQztRQUMvQyxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQ0FBbUM7SUFDOUUsQ0FBQztJQUdNLHlCQUFVLEdBQWpCLFVBQWtCLENBQVMsRUFBRSxDQUFTO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLHlCQUFVLEdBQWpCLFVBQWtCLENBQVMsRUFBRSxDQUFTO1FBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDL0UsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQXpDQSxBQXlDQyxJQUFBO0FBekNZLG9CQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdyaWQge1xyXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgb2JzdGFjbGVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcclxuICAgIHByaXZhdGUgZ3JpZDogbnVtYmVyW11bXTtcclxuXHJcbiAgICAvLyBDb25zdHJ1Y3RvciBjaOG7iSBuaOG6rW4gbeG7mXQgxJHhu5FpIHPhu5EgbMOgIGvDrWNoIHRoxrDhu5tjIGPhu6dhIGzGsOG7m2lcclxuICAgIGNvbnN0cnVjdG9yKHNpemU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBzaXplO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0T2JzdGFjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9ic3RhY2xlcy5hZGQoYCR7eH0sJHt5fWApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgIC8vIFBoxrDGoW5nIHRo4bupYyDEkeG7gyBs4bqleSB24buLIHRyw60gdHLDqm4gbMaw4bubaSB04burIHThu41hIMSR4buZIHRo4bq/IGdp4bubaVxyXG4gICAgICBwdWJsaWMgZ2V0Tm9kZVBvc2l0aW9uKG5vZGU6IGNjLk5vZGUpOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0ge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAvLyBDaHV54buDbiDEkeG7lWkgdOG7qyB04buNYSDEkeG7mSB0aOG6vyBnaeG7m2kgduG7gSB04buNYSDEkeG7mSBsxrDhu5tpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogTWF0aC5mbG9vcihwb3NpdGlvbi54IC8gMzIpLCAvLyBHaeG6oyBz4butIGvDrWNoIHRoxrDhu5tjIG3hu5dpIMO0IGzDoCAzMngzMlxyXG4gICAgICAgICAgICB5OiBNYXRoLmZsb29yKHBvc2l0aW9uLnkgLyAzMilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBoxrDGoW5nIHRo4bupYyDEkeG7gyBs4bqleSB04buNYSDEkeG7mSB0aOG6vyBnaeG7m2kgdOG7qyB04buNYSDEkeG7mSBsxrDhu5tpXHJcbiAgICBwdWJsaWMgZ2V0V29ybGRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IGNjLlZlYzMge1xyXG4gICAgICAgIC8vIENodXnhu4NuIMSR4buVaSB04burIHThu41hIMSR4buZIGzGsOG7m2kgduG7gSB04buNYSDEkeG7mSB0aOG6vyBnaeG7m2lcclxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzMoeCAqIDMyLCB5ICogMzIsIDApOyAvLyBHaeG6oyBz4butIGvDrWNoIHRoxrDhu5tjIG3hu5dpIMO0IGzDoCAzMngzMlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaXNXYWxrYWJsZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5Cb3VuZHMoeCwgeSkgJiYgdGhpcy5ncmlkW3hdW3ldID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0luQm91bmRzKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHggPj0gMCAmJiB5ID49IDAgJiYgeCA8IHRoaXMuZ3JpZC5sZW5ndGggJiYgeSA8IHRoaXMuZ3JpZFswXS5sZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuIl19