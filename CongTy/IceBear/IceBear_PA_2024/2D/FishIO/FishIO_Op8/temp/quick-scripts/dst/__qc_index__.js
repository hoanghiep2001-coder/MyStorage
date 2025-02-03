
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
require('./assets/scripts/Controller/BossController');
require('./assets/scripts/Controller/CameraController');
require('./assets/scripts/Controller/EnemyController');
require('./assets/scripts/Controller/GameController');
require('./assets/scripts/Controller/PlayerController');
require('./assets/scripts/Controller/UIGameController');
require('./assets/scripts/Data/Constant');
require('./assets/scripts/Other/Enemy');
require('./assets/scripts/Other/GamePlay');
require('./assets/scripts/Other/SwordPlayer');
require('./assets/scripts/Other/TouchArea');

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