
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
require('./assets/Script/Character/AnimNameStick');
require('./assets/Script/Character/ArcherCombos');
require('./assets/Script/Character/ArrowStick');
require('./assets/Script/Character/AttackBoxStick');
require('./assets/Script/Character/HealthBar');
require('./assets/Script/Character/HitCombos');
require('./assets/Script/Character/Player3D');
require('./assets/Script/Const/CONST');
require('./assets/Script/Const/GameInfo');
require('./assets/Script/Controllers/AudioManager');
require('./assets/Script/Controllers/CameraController');
require('./assets/Script/Controllers/GameController');
require('./assets/Script/Controllers/UIGameController');
require('./assets/Script/Enemy/DetectPlayer');
require('./assets/Script/Enemy/EnemyBehavior');
require('./assets/Script/Enemy/EnemyBullet');
require('./assets/Script/Enemy/EnemyCollisionAttack');
require('./assets/Script/Enemy/HealthBarEnemy');
require('./assets/Script/Helper/CustomButtonAction');
require('./assets/Script/Helper/GameEnum');
require('./assets/Script/Helper/MoveInput');
require('./assets/Script/Others/ArrowRatation');
require('./assets/Script/Others/ButtonAttack');
require('./assets/Script/Others/ButtonInstall');
require('./assets/Script/Others/DropItem');
require('./assets/Script/Others/HandTutorial');
require('./assets/Script/Others/PopupInstall');
require('./assets/Script/Others/Portal');

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