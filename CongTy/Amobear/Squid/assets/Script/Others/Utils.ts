
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

const getTrailingNumber = (string: string): number => {
    const match = string.match(/\d+$/); // Tìm số ở cuối chuỗi
    return match ? parseInt(match[0], 10) : null; // Trả về số hoặc null nếu không có số
}

export class Utils {
    static getTrailingNumber: typeof getTrailingNumber = getTrailingNumber
}
