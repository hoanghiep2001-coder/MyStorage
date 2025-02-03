
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/PathFinding.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFBhdGhGaW5kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5QyxpQ0FBNEI7QUFDNUIsK0JBQThCO0FBRXhCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBZ0ZDO1FBN0VHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsaUJBQVcsR0FBYyxFQUFFLENBQUM7UUFFNUIscUJBQWUsR0FBWSxLQUFLLENBQUM7O0lBd0VyQyxDQUFDO0lBbkVhLDRCQUFNLEdBQWhCO1FBQ0kseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyw0Q0FBNEM7UUFDdEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGVBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVTLDJCQUFLLEdBQWY7SUFFQSxDQUFDO0lBR0QsbUNBQWEsR0FBYjtRQUNJLElBQUcsSUFBSSxDQUFDLGVBQWU7WUFBRSxPQUFPO1FBRWhDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBR08sd0NBQWtCLEdBQTFCO1FBQ0ksZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsNEJBQTRCO0lBQ2hDLENBQUM7SUFFTywrQkFBUyxHQUFqQjtRQUFBLGlCQVVDO1FBVEcsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUN6QixJQUFNLGFBQWEsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV0RCxJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFFaEUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyx1Q0FBaUIsR0FBekIsVUFBMEIsSUFBYSxFQUFFLElBQWdDO1FBQXpFLGlCQW9CQztRQW5CRyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU87UUFFOUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBTSxRQUFRLEdBQUc7WUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUEsS0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQUMsT0FBQSxFQUFFLENBQUMsT0FBZ0IsQ0FBQztnQkFDN0IsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRWxELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3FCQUNULEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7cUJBQzdCLElBQUksQ0FBQztvQkFDRixLQUFLLEVBQUUsQ0FBQztvQkFDUixRQUFRLEVBQUUsQ0FBQztnQkFDZixDQUFDLENBQUM7cUJBQ0QsS0FBSyxFQUFFLENBQUM7YUFDaEI7UUFDTCxDQUFDLENBQUM7UUFFRixRQUFRLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFHUyw0QkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUE1RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvREFDUTtJQU5YLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FnRi9CO0lBQUQsa0JBQUM7Q0FoRkQsQUFnRkMsQ0FoRndDLEVBQUUsQ0FBQyxTQUFTLEdBZ0ZwRDtrQkFoRm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEFTdGFyIGZyb20gXCIuL0FzdGFyXCI7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiLi9HcmlkXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGhGaW5kaW5nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRhcmdldDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIG5vZGVzVG9Nb3ZlOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBpc1N0YXJ0RmluZFBhdGg6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGdyaWQ6IEdyaWQ7XHJcbiAgICBwcml2YXRlIGFzdGFyOiBBU3RhcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEto4bufaSB04bqhbyBHcmlkIHbDoCBBU3RhclxyXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKDIwKTsgLy8gS2jhu59pIHThuqFvIGdyaWQgduG7m2kga8OtY2ggdGjGsOG7m2MgMTB4MTAsIHbDrSBk4bulXHJcbiAgICAgICAgdGhpcy5hc3RhciA9IG5ldyBBU3Rhcih0aGlzLmdyaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGFydEZpbmRQQXRoKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuaXNTdGFydEZpbmRQYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNTdGFydEZpbmRQYXRoID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldHVwR3JpZE9ic3RhY2xlcygpO1xyXG4gICAgICAgIHRoaXMuZmluZFBhdGhzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBHcmlkT2JzdGFjbGVzKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFbDrSBk4bulOiDEkOG6t3QgduG6rXQgY+G6o24gdHJvbmcgZ3JpZFxyXG4gICAgICAgIHRoaXMuZ3JpZC5zZXRPYnN0YWNsZSgzLCAzKTtcclxuICAgICAgICB0aGlzLmdyaWQuc2V0T2JzdGFjbGUoNCwgNCk7XHJcbiAgICAgICAgLy8gVGjDqm0gduG6rXQgY+G6o24ga2jDoWMgbuG6v3UgY+G6p25cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbmRQYXRocygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRoaXMuZ3JpZC5nZXROb2RlUG9zaXRpb24odGhpcy50YXJnZXQpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVzVG9Nb3ZlLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSB0aGlzLmdyaWQuZ2V0Tm9kZVBvc2l0aW9uKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYXN0YXIuZmluZFBhdGgoc3RhcnRQb3NpdGlvbiwgdGFyZ2V0UG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tb3ZlTm9kZUFsb25nUGF0aChub2RlLCBwYXRoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVOb2RlQWxvbmdQYXRoKG5vZGU6IGNjLk5vZGUsIHBhdGg6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgY29uc3QgbW92ZVN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA8IHBhdGgubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBhdGhbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdyaWQuZ2V0V29ybGRQb3NpdGlvbih4LCB5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBwb3NpdGlvbiB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbW92ZVN0ZXAoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pc0RyYXcgJiYgIUNvbnN0YW50cy5pc1dpbkdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEZpbmRQQXRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==