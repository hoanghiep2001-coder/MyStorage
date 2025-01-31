
import { ORDER_IN_LAYER_MAX, SortingLayer } from './sorting-define';

const { ccclass, property, disallowMultiple, executeInEditMode } = cc._decorator;

@ccclass('lcc-ui/SortingGroup')
@disallowMultiple()
@executeInEditMode()
export class SortingGroup extends cc.Component {
    /**
     * 排序层
     */
    @property({type: cc.Enum(SortingLayer)})
    private _sortingLayer:SortingLayer = SortingLayer.DEFAULT;

    /**
     * 排序层
     */
    @property({type: cc.Enum(SortingLayer)})
    get sortingLayer(){
        return this._sortingLayer;
    }
    set sortingLayer(value:SortingLayer){
        this._sortingLayer = value;
        this.node.sortingPriority = Math.sign(this._sortingLayer) * (Math.abs(this._sortingLayer) * ORDER_IN_LAYER_MAX + this._orderInLayer);
    }
    
    /**
     * 排序值
     */
    @property({ type:cc.Float, min: 0, max : ORDER_IN_LAYER_MAX })
    private _orderInLayer:number = 0;

    /**
     * 排序值
     */
    @property({ type:cc.Float, min: 0, max : ORDER_IN_LAYER_MAX })
    get orderInLayer(){
        return this._orderInLayer;
    }
    set orderInLayer(value:number){
        this._orderInLayer = value;
        this.node.sortingPriority = Math.sign(this._sortingLayer) * (Math.abs(this._sortingLayer) * ORDER_IN_LAYER_MAX + this._orderInLayer);
    }

    onEnable(){
        this.node.sortingPriority = Math.sign(this._sortingLayer) * (Math.abs(this._sortingLayer) * ORDER_IN_LAYER_MAX + this._orderInLayer);
        this.node.sortingEnabled = true;
    }

    onDisable(){
        this.node.sortingPriority = 0;
        this.node.sortingEnabled = false;
    }
}
