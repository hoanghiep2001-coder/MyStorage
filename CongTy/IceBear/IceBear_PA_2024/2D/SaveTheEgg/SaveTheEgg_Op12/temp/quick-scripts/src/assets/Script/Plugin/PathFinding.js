"use strict";
cc._RF.push(module, '7a986egxNlAsrw6JHknO4j0', 'PathFinding');
// Script/Plugin/PathFinding.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var Astar_1 = require("./Astar");
var Grid_1 = require("./Grid");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PathFinding = /** @class */ (function (_super) {
    __extends(PathFinding, _super);
    function PathFinding() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.nodesToMove = [];
        _this.isStartFindPath = false;
        return _this;
    }
    PathFinding.prototype.onLoad = function () {
        // Khởi tạo Grid và AStar
        this.grid = new Grid_1.Grid(20); // Khởi tạo grid với kích thước 10x10, ví dụ
        this.astar = new Astar_1.default(this.grid);
    };
    PathFinding.prototype.start = function () {
    };
    PathFinding.prototype.startFindPAth = function () {
        if (this.isStartFindPath)
            return;
        this.isStartFindPath = true;
        this.setupGridObstacles();
        this.findPaths();
    };
    PathFinding.prototype.setupGridObstacles = function () {
        // Ví dụ: Đặt vật cản trong grid
        this.grid.setObstacle(3, 3);
        this.grid.setObstacle(4, 4);
        // Thêm vật cản khác nếu cần
    };
    PathFinding.prototype.findPaths = function () {
        var _this = this;
        var targetPosition = this.grid.getNodePosition(this.target);
        this.nodesToMove.forEach(function (node) {
            var startPosition = _this.grid.getNodePosition(node);
            var path = _this.astar.findPath(startPosition, targetPosition);
            _this.moveNodeAlongPath(node, path);
        });
    };
    PathFinding.prototype.moveNodeAlongPath = function (node, path) {
        var _this = this;
        if (path.length === 0)
            return;
        var index = 0;
        var moveStep = function () {
            if (index < path.length) {
                var _a = path[index], x = _a.x, y = _a.y;
                var position = _this.grid.getWorldPosition(x, y);
                cc.tween(node)
                    .to(1, { position: position })
                    .call(function () {
                    index++;
                    moveStep();
                })
                    .start();
            }
        };
        moveStep();
    };
    PathFinding.prototype.update = function (dt) {
        if (window.isDraw && !constants_1.Constants.isWinGame) {
            this.startFindPAth();
        }
    };
    __decorate([
        property(cc.Node)
    ], PathFinding.prototype, "target", void 0);
    __decorate([
        property([cc.Node])
    ], PathFinding.prototype, "nodesToMove", void 0);
    PathFinding = __decorate([
        ccclass
    ], PathFinding);
    return PathFinding;
}(cc.Component));
exports.default = PathFinding;

cc._RF.pop();