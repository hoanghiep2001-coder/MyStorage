
/**
 * 排序层级
 */
export enum SortingLayer {
    
    /** 
     * 默认层级，此枚举必须保留，并且值不能修改
     */
    DEFAULT = 0,

    // 测试定义，可以直接移除
    TEST_LIST_ITEM = 1,
}

/**
 * 在层级中最大排序值
 */
export const ORDER_IN_LAYER_MAX = 100000;
