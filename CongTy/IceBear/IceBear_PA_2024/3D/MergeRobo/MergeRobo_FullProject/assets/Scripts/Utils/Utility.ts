import { _decorator, Node, Vec2, Vec3 } from 'cc';

 
const convertToLocalLocation = (value: Vec2, node: Node): Vec3 => {
    const nodePos = node.getPosition();
    const localX = value.x - 160 - nodePos.x;
    const localY = value.y - 240 - nodePos.y;
    const result = new Vec3(localX, localY, 0);
    return result;
}


export class Utility  {
    static convertToLocalLocation(value: Vec2, node: Node): Vec3 {
        return convertToLocalLocation(value, node);
    }
}

