
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/lcc-ui-sorting-group/engine-extend/node');
require('./assets/lcc-ui-sorting-group/engine-extend/render-component');
require('./assets/lcc-ui-sorting-group/engine-extend/render-flow');
require('./assets/lcc-ui-sorting-group/engine-extend/spine-assembler');
require('./assets/lcc-ui-sorting-group/engine-extend/trans-pool/index');
require('./assets/lcc-ui-sorting-group/engine-extend/trans-pool/mem-pool');
require('./assets/lcc-ui-sorting-group/engine-extend/trans-pool/node-mem-pool');
require('./assets/lcc-ui-sorting-group/engine-extend/trans-pool/node-unit');
require('./assets/lcc-ui-sorting-group/engine-extend/trans-pool/unit-base');
require('./assets/lcc-ui-sorting-group/sorting-define');
require('./assets/lcc-ui-sorting-group/sorting-group');
require('./assets/test/scripts/list-test-item');
require('./assets/test/scripts/test-scene');

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