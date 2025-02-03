"use strict";
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