import {Grid} from './Grid'
 
interface AStarNode {
    x: number;
    y: number;
    g: number;
    h: number;
    f: number;
    parent: AStarNode | null;
}

class AStar {
    private grid: Grid;

    constructor(grid: Grid) {
        this.grid = grid;
    }

    private heuristic(node: AStarNode, endNode: AStarNode): number {
        return Math.abs(node.x - endNode.x) + Math.abs(node.y - endNode.y);
    }

    private getNeighbors(node: AStarNode): AStarNode[] {
        const neighbors: AStarNode[] = [];
        const directions = [
            { x: -1, y: 0 }, // Trái
            { x: 1, y: 0 },  // Phải
            { x: 0, y: -1 }, // Trên
            { x: 0, y: 1 },  // Dưới
        ];

        for (const direction of directions) {
            const newX = node.x + direction.x;
            const newY = node.y + direction.y;

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
    }

    public findPath(startPos: { x: number, y: number }, endPos: { x: number, y: number }): AStarNode[] | null {
        const startNode: AStarNode = {
            x: startPos.x,
            y: startPos.y,
            g: 0,
            h: 0,
            f: 0,
            parent: null,
        };
        const endNode: AStarNode = {
            x: endPos.x,
            y: endPos.y,
            g: 0,
            h: 0,
            f: 0,
            parent: null,
        };

        const openList: AStarNode[] = [];
        const closedList: AStarNode[] = [];

        openList.push(startNode);

        while (openList.length > 0) {
            let currentNode = openList.reduce((prev, curr) => (prev.f < curr.f ? prev : curr));

            if (currentNode.x === endNode.x && currentNode.y === endNode.y) {
                return this.reconstructPath(currentNode);
            }

            openList.splice(openList.indexOf(currentNode), 1);
            closedList.push(currentNode);

            const neighbors = this.getNeighbors(currentNode);

            for (const neighbor of neighbors) {
                if (closedList.find(n => n.x === neighbor.x && n.y === neighbor.y)) {
                    continue;
                }

                const tentativeG = currentNode.g + 1;

                let inOpenList = openList.find(n => n.x === neighbor.x && n.y === neighbor.y);
                if (!inOpenList || tentativeG < neighbor.g) {
                    neighbor.g = tentativeG;
                    neighbor.h = this.heuristic(neighbor, endNode);
                    neighbor.f = neighbor.g + neighbor.h;
                    neighbor.parent = currentNode;

                    if (!inOpenList) {
                        openList.push(neighbor);
                    }
                }
            }
        }

        return null;
    }

    private reconstructPath(node: AStarNode): AStarNode[] {
        const path: AStarNode[] = [];
        let currentNode: AStarNode | null = node;

        while (currentNode) {
            path.push(currentNode);
            currentNode = currentNode.parent;
        }

        return path.reverse();
    }
}

export default AStar;
