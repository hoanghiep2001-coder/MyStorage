
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Astar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '835e6+FhSxOmZO9WaB8eSN5', 'Astar');
// Script/Plugin/Astar.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AStar = /** @class */ (function () {
    function AStar(grid) {
        this.grid = grid;
    }
    AStar.prototype.heuristic = function (node, endNode) {
        return Math.abs(node.x - endNode.x) + Math.abs(node.y - endNode.y);
    };
    AStar.prototype.getNeighbors = function (node) {
        var neighbors = [];
        var directions = [
            { x: -1, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: -1 },
            { x: 0, y: 1 },
        ];
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var direction = directions_1[_i];
            var newX = node.x + direction.x;
            var newY = node.y + direction.y;
            if (this.grid.isWalkable(newX, newY)) {
                neighbors.push({
                    x: newX,
                    y: newY,
                    g: 0,
                    h: 0,
                    f: 0,
                    parent: null,
                });
            }
        }
        return neighbors;
    };
    AStar.prototype.findPath = function (startPos, endPos) {
        var startNode = {
            x: startPos.x,
            y: startPos.y,
            g: 0,
            h: 0,
            f: 0,
            parent: null,
        };
        var endNode = {
            x: endPos.x,
            y: endPos.y,
            g: 0,
            h: 0,
            f: 0,
            parent: null,
        };
        var openList = [];
        var closedList = [];
        openList.push(startNode);
        while (openList.length > 0) {
            var currentNode = openList.reduce(function (prev, curr) { return (prev.f < curr.f ? prev : curr); });
            if (currentNode.x === endNode.x && currentNode.y === endNode.y) {
                return this.reconstructPath(currentNode);
            }
            openList.splice(openList.indexOf(currentNode), 1);
            closedList.push(currentNode);
            var neighbors = this.getNeighbors(currentNode);
            var _loop_1 = function (neighbor) {
                if (closedList.find(function (n) { return n.x === neighbor.x && n.y === neighbor.y; })) {
                    return "continue";
                }
                var tentativeG = currentNode.g + 1;
                var inOpenList = openList.find(function (n) { return n.x === neighbor.x && n.y === neighbor.y; });
                if (!inOpenList || tentativeG < neighbor.g) {
                    neighbor.g = tentativeG;
                    neighbor.h = this_1.heuristic(neighbor, endNode);
                    neighbor.f = neighbor.g + neighbor.h;
                    neighbor.parent = currentNode;
                    if (!inOpenList) {
                        openList.push(neighbor);
                    }
                }
            };
            var this_1 = this;
            for (var _i = 0, neighbors_1 = neighbors; _i < neighbors_1.length; _i++) {
                var neighbor = neighbors_1[_i];
                _loop_1(neighbor);
            }
        }
        return null;
    };
    AStar.prototype.reconstructPath = function (node) {
        var path = [];
        var currentNode = node;
        while (currentNode) {
            path.push(currentNode);
            currentNode = currentNode.parent;
        }
        return path.reverse();
    };
    return AStar;
}());
exports.default = AStar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEFzdGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7SUFHSSxlQUFZLElBQVU7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVPLHlCQUFTLEdBQWpCLFVBQWtCLElBQWUsRUFBRSxPQUFrQjtRQUNqRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU8sNEJBQVksR0FBcEIsVUFBcUIsSUFBZTtRQUNoQyxJQUFNLFNBQVMsR0FBZ0IsRUFBRSxDQUFDO1FBQ2xDLElBQU0sVUFBVSxHQUFHO1lBQ2YsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNmLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNmLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1NBQ2pCLENBQUM7UUFFRixLQUF3QixVQUFVLEVBQVYseUJBQVUsRUFBVix3QkFBVSxFQUFWLElBQVUsRUFBRTtZQUEvQixJQUFNLFNBQVMsbUJBQUE7WUFDaEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUVsQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDbEMsU0FBUyxDQUFDLElBQUksQ0FBQztvQkFDWCxDQUFDLEVBQUUsSUFBSTtvQkFDUCxDQUFDLEVBQUUsSUFBSTtvQkFDUCxDQUFDLEVBQUUsQ0FBQztvQkFDSixDQUFDLEVBQUUsQ0FBQztvQkFDSixDQUFDLEVBQUUsQ0FBQztvQkFDSixNQUFNLEVBQUUsSUFBSTtpQkFDZixDQUFDLENBQUM7YUFDTjtTQUNKO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVNLHdCQUFRLEdBQWYsVUFBZ0IsUUFBa0MsRUFBRSxNQUFnQztRQUNoRixJQUFNLFNBQVMsR0FBYztZQUN6QixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDYixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDYixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7WUFDSixNQUFNLEVBQUUsSUFBSTtTQUNmLENBQUM7UUFDRixJQUFNLE9BQU8sR0FBYztZQUN2QixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDWCxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDWCxDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7WUFDSixNQUFNLEVBQUUsSUFBSTtTQUNmLENBQUM7UUFFRixJQUFNLFFBQVEsR0FBZ0IsRUFBRSxDQUFDO1FBQ2pDLElBQU0sVUFBVSxHQUFnQixFQUFFLENBQUM7UUFFbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6QixPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUUsSUFBSSxJQUFLLE9BQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztZQUVuRixJQUFJLFdBQVcsQ0FBQyxDQUFDLEtBQUssT0FBTyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFDLEVBQUU7Z0JBQzVELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM1QztZQUVELFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsRCxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTdCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7b0NBRXRDLFFBQVE7Z0JBQ2YsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxFQUFFOztpQkFFbkU7Z0JBRUQsSUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRXJDLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUM7Z0JBQzlFLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUU7b0JBQ3hDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO29CQUN4QixRQUFRLENBQUMsQ0FBQyxHQUFHLE9BQUssU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDL0MsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO29CQUU5QixJQUFJLENBQUMsVUFBVSxFQUFFO3dCQUNiLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzNCO2lCQUNKOzs7WUFqQkwsS0FBdUIsVUFBUyxFQUFULHVCQUFTLEVBQVQsdUJBQVMsRUFBVCxJQUFTO2dCQUEzQixJQUFNLFFBQVEsa0JBQUE7d0JBQVIsUUFBUTthQWtCbEI7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTywrQkFBZSxHQUF2QixVQUF3QixJQUFlO1FBQ25DLElBQU0sSUFBSSxHQUFnQixFQUFFLENBQUM7UUFDN0IsSUFBSSxXQUFXLEdBQXFCLElBQUksQ0FBQztRQUV6QyxPQUFPLFdBQVcsRUFBRTtZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZCLFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQTdHQSxBQTZHQyxJQUFBO0FBRUQsa0JBQWUsS0FBSyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHcmlkfSBmcm9tICcuL0dyaWQnXHJcbiBcclxuaW50ZXJmYWNlIEFTdGFyTm9kZSB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICBnOiBudW1iZXI7XHJcbiAgICBoOiBudW1iZXI7XHJcbiAgICBmOiBudW1iZXI7XHJcbiAgICBwYXJlbnQ6IEFTdGFyTm9kZSB8IG51bGw7XHJcbn1cclxuXHJcbmNsYXNzIEFTdGFyIHtcclxuICAgIHByaXZhdGUgZ3JpZDogR3JpZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihncmlkOiBHcmlkKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhldXJpc3RpYyhub2RlOiBBU3Rhck5vZGUsIGVuZE5vZGU6IEFTdGFyTm9kZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKG5vZGUueCAtIGVuZE5vZGUueCkgKyBNYXRoLmFicyhub2RlLnkgLSBlbmROb2RlLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TmVpZ2hib3JzKG5vZGU6IEFTdGFyTm9kZSk6IEFTdGFyTm9kZVtdIHtcclxuICAgICAgICBjb25zdCBuZWlnaGJvcnM6IEFTdGFyTm9kZVtdID0gW107XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9ucyA9IFtcclxuICAgICAgICAgICAgeyB4OiAtMSwgeTogMCB9LCAvLyBUcsOhaVxyXG4gICAgICAgICAgICB7IHg6IDEsIHk6IDAgfSwgIC8vIFBo4bqjaVxyXG4gICAgICAgICAgICB7IHg6IDAsIHk6IC0xIH0sIC8vIFRyw6puXHJcbiAgICAgICAgICAgIHsgeDogMCwgeTogMSB9LCAgLy8gRMaw4bubaVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZGlyZWN0aW9uIG9mIGRpcmVjdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3WCA9IG5vZGUueCArIGRpcmVjdGlvbi54O1xyXG4gICAgICAgICAgICBjb25zdCBuZXdZID0gbm9kZS55ICsgZGlyZWN0aW9uLnk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkLmlzV2Fsa2FibGUobmV3WCwgbmV3WSkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBuZXdYLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IG5ld1ksXHJcbiAgICAgICAgICAgICAgICAgICAgZzogMCxcclxuICAgICAgICAgICAgICAgICAgICBoOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGY6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZWlnaGJvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmRQYXRoKHN0YXJ0UG9zOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sIGVuZFBvczogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9KTogQVN0YXJOb2RlW10gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBzdGFydE5vZGU6IEFTdGFyTm9kZSA9IHtcclxuICAgICAgICAgICAgeDogc3RhcnRQb3MueCxcclxuICAgICAgICAgICAgeTogc3RhcnRQb3MueSxcclxuICAgICAgICAgICAgZzogMCxcclxuICAgICAgICAgICAgaDogMCxcclxuICAgICAgICAgICAgZjogMCxcclxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZW5kTm9kZTogQVN0YXJOb2RlID0ge1xyXG4gICAgICAgICAgICB4OiBlbmRQb3MueCxcclxuICAgICAgICAgICAgeTogZW5kUG9zLnksXHJcbiAgICAgICAgICAgIGc6IDAsXHJcbiAgICAgICAgICAgIGg6IDAsXHJcbiAgICAgICAgICAgIGY6IDAsXHJcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBvcGVuTGlzdDogQVN0YXJOb2RlW10gPSBbXTtcclxuICAgICAgICBjb25zdCBjbG9zZWRMaXN0OiBBU3Rhck5vZGVbXSA9IFtdO1xyXG5cclxuICAgICAgICBvcGVuTGlzdC5wdXNoKHN0YXJ0Tm9kZSk7XHJcblxyXG4gICAgICAgIHdoaWxlIChvcGVuTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG9wZW5MaXN0LnJlZHVjZSgocHJldiwgY3VycikgPT4gKHByZXYuZiA8IGN1cnIuZiA/IHByZXYgOiBjdXJyKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudE5vZGUueCA9PT0gZW5kTm9kZS54ICYmIGN1cnJlbnROb2RlLnkgPT09IGVuZE5vZGUueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjb25zdHJ1Y3RQYXRoKGN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3Blbkxpc3Quc3BsaWNlKG9wZW5MaXN0LmluZGV4T2YoY3VycmVudE5vZGUpLCAxKTtcclxuICAgICAgICAgICAgY2xvc2VkTGlzdC5wdXNoKGN1cnJlbnROb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5laWdoYm9ycyA9IHRoaXMuZ2V0TmVpZ2hib3JzKGN1cnJlbnROb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmVpZ2hib3Igb2YgbmVpZ2hib3JzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VkTGlzdC5maW5kKG4gPT4gbi54ID09PSBuZWlnaGJvci54ICYmIG4ueSA9PT0gbmVpZ2hib3IueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW50YXRpdmVHID0gY3VycmVudE5vZGUuZyArIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGluT3Blbkxpc3QgPSBvcGVuTGlzdC5maW5kKG4gPT4gbi54ID09PSBuZWlnaGJvci54ICYmIG4ueSA9PT0gbmVpZ2hib3IueSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWluT3Blbkxpc3QgfHwgdGVudGF0aXZlRyA8IG5laWdoYm9yLmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvci5nID0gdGVudGF0aXZlRztcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvci5oID0gdGhpcy5oZXVyaXN0aWMobmVpZ2hib3IsIGVuZE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9yLmYgPSBuZWlnaGJvci5nICsgbmVpZ2hib3IuaDtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvci5wYXJlbnQgPSBjdXJyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbk9wZW5MaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5MaXN0LnB1c2gobmVpZ2hib3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWNvbnN0cnVjdFBhdGgobm9kZTogQVN0YXJOb2RlKTogQVN0YXJOb2RlW10ge1xyXG4gICAgICAgIGNvbnN0IHBhdGg6IEFTdGFyTm9kZVtdID0gW107XHJcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlOiBBU3Rhck5vZGUgfCBudWxsID0gbm9kZTtcclxuXHJcbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgIHBhdGgucHVzaChjdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhdGgucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBU3RhcjtcclxuIl19