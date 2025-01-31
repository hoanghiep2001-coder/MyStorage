
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Singleton
 * DateTime = Mon Dec 23 2024 18:53:32 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = Singleton.ts
 * FileBasenameNoExtension = Singleton
 * URL = db://assets/scripts/Others/Singleton.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('Singleton')
export default class Singleton<T> extends Component {
    public static Instance<T>(c: {new(): T; }) : T{
        if (this._instance == null){
            this._instance = new c();
        }
        return this._instance;
    }
    public static _instance = null;
}

