
(function () {
var scripts = [{"deps":{"./assets/src/brick/BrickScene":1,"./assets/src/G":2,"./assets/src/get47/Get47Constants":3,"./assets/src/gobang/GobangBoard":4,"./assets/src/jump/JumpConstants":5,"./assets/src/hall/HallScene":6,"./assets/src/link/LinkConstants":7,"./assets/src/mine/MineLevelLabel":8,"./assets/src/loading/LoadingScene":9,"./assets/src/reversi/ReversiBoard":10,"./assets/src/shared/Timer":11,"./assets/src/puzzle/PuzzleConstants":12,"./assets/src/snake/SnakeConstants":13,"./assets/migration/use_v2.0.x_cc.Toggle_event":14,"./assets/src/tetris/TetrisConstants":15,"./assets/src/get47/Get47Piece":16,"./assets/src/brick/BrickPaddle":17,"./assets/src/brick/BrickBall":18,"./assets/src/gobang/GobangScene":19,"./assets/src/get47/Get47Scene":20,"./assets/src/gobang/GobangConstants":21,"./assets/src/jump/JumpPlayer":22,"./assets/src/gobang/GobangPiece":23,"./assets/src/get47/Get47Board":24,"./assets/src/jump/JumpProgress":25,"./assets/src/get47/Get47Score":26,"./assets/src/gobang/GobangAI":27,"./assets/src/jump/JumpScene":28,"./assets/src/link/LinkPiece":29,"./assets/src/jump/JumpStage":30,"./assets/src/jump/JumpBlock":31,"./assets/src/link/LinkBoard":32,"./assets/src/mine/MineScene":33,"./assets/src/mine/MnieBoard":34,"./assets/src/mine/MinePiece":35,"./assets/src/link/LinkScene":36,"./assets/src/puzzle/PuzzlePiece":37,"./assets/src/mine/MineConstans":38,"./assets/src/puzzle/PuzzleBoard":39,"./assets/src/reversi/ReversiScene":40,"./assets/src/reversi/ReversiConstants":41,"./assets/src/puzzle/PuzzleScene":42,"./assets/src/shared/GameRoot":43,"./assets/src/reversi/ReversiAI":44,"./assets/src/reversi/ReversiPiece":45,"./assets/src/shared/Streak":46,"./assets/src/snake/SnakeBoard":47,"./assets/src/snake/SnakePiece":48,"./assets/src/tetris/TetrisPiece":49,"./assets/src/tetris/TetrisScene":50,"./assets/src/snake/SnakeScene":51,"./assets/src/tetris/TetrisBoard":52,"./assets/src/2048/M2048Constants":53,"./assets/src/2048/M2048Board":54,"./assets/src/2048/M2048Piece":55,"./assets/src/2048/M2048Scene":56,"./assets/src/brick/BrickColor":57,"./assets/src/brick/BrickLayout":58},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./BrickBall":18,"./BrickPaddle":17,"./BrickLayout":58,"../G":2},"path":"preview-scripts/assets/src/brick/BrickScene.js"},{"deps":{},"path":"preview-scripts/assets/src/G.js"},{"deps":{},"path":"preview-scripts/assets/src/get47/Get47Constants.js"},{"deps":{"./GobangConstants":21,"./GobangPiece":23},"path":"preview-scripts/assets/src/gobang/GobangBoard.js"},{"deps":{},"path":"preview-scripts/assets/src/jump/JumpConstants.js"},{"deps":{"../G":2},"path":"preview-scripts/assets/src/hall/HallScene.js"},{"deps":{},"path":"preview-scripts/assets/src/link/LinkConstants.js"},{"deps":{},"path":"preview-scripts/assets/src/mine/MineLevelLabel.js"},{"deps":{"../G":2,"../shared/GameRoot":43},"path":"preview-scripts/assets/src/loading/LoadingScene.js"},{"deps":{"./ReversiPiece":45,"./ReversiConstants":41},"path":"preview-scripts/assets/src/reversi/ReversiBoard.js"},{"deps":{},"path":"preview-scripts/assets/src/shared/Timer.js"},{"deps":{},"path":"preview-scripts/assets/src/puzzle/PuzzleConstants.js"},{"deps":{},"path":"preview-scripts/assets/src/snake/SnakeConstants.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{},"path":"preview-scripts/assets/src/tetris/TetrisConstants.js"},{"deps":{},"path":"preview-scripts/assets/src/get47/Get47Piece.js"},{"deps":{},"path":"preview-scripts/assets/src/brick/BrickPaddle.js"},{"deps":{},"path":"preview-scripts/assets/src/brick/BrickBall.js"},{"deps":{"./GobangBoard":4,"./GobangConstants":21,"./GobangAI":27,"../G":2},"path":"preview-scripts/assets/src/gobang/GobangScene.js"},{"deps":{"./Get47Board":24,"./Get47Constants":3,"../G":2,"./Get47Score":26},"path":"preview-scripts/assets/src/get47/Get47Scene.js"},{"deps":{},"path":"preview-scripts/assets/src/gobang/GobangConstants.js"},{"deps":{},"path":"preview-scripts/assets/src/jump/JumpPlayer.js"},{"deps":{},"path":"preview-scripts/assets/src/gobang/GobangPiece.js"},{"deps":{"./Get47Piece":16,"./Get47Constants":3},"path":"preview-scripts/assets/src/get47/Get47Board.js"},{"deps":{},"path":"preview-scripts/assets/src/jump/JumpProgress.js"},{"deps":{},"path":"preview-scripts/assets/src/get47/Get47Score.js"},{"deps":{"./GobangConstants":21},"path":"preview-scripts/assets/src/gobang/GobangAI.js"},{"deps":{"./JumpStage":30,"./JumpConstants":5,"./JumpProgress":25,"../G":2},"path":"preview-scripts/assets/src/jump/JumpScene.js"},{"deps":{"./LinkConstants":7},"path":"preview-scripts/assets/src/link/LinkPiece.js"},{"deps":{"./JumpBlock":31,"./JumpPlayer":22},"path":"preview-scripts/assets/src/jump/JumpStage.js"},{"deps":{},"path":"preview-scripts/assets/src/jump/JumpBlock.js"},{"deps":{"./LinkPiece":29,"./LinkConstants":7},"path":"preview-scripts/assets/src/link/LinkBoard.js"},{"deps":{"./MnieBoard":34,"../G":2,"./MineConstans":38,"./MineLevelLabel":8},"path":"preview-scripts/assets/src/mine/MineScene.js"},{"deps":{"./MinePiece":35,"./MineConstans":38},"path":"preview-scripts/assets/src/mine/MnieBoard.js"},{"deps":{"./MineConstans":38},"path":"preview-scripts/assets/src/mine/MinePiece.js"},{"deps":{"./LinkBoard":32,"./LinkConstants":7,"../G":2,"../shared/Timer":11},"path":"preview-scripts/assets/src/link/LinkScene.js"},{"deps":{},"path":"preview-scripts/assets/src/puzzle/PuzzlePiece.js"},{"deps":{},"path":"preview-scripts/assets/src/mine/MineConstans.js"},{"deps":{"./PuzzlePiece":37},"path":"preview-scripts/assets/src/puzzle/PuzzleBoard.js"},{"deps":{"./ReversiBoard":10,"./ReversiAI":44,"./ReversiConstants":41,"../G":2},"path":"preview-scripts/assets/src/reversi/ReversiScene.js"},{"deps":{},"path":"preview-scripts/assets/src/reversi/ReversiConstants.js"},{"deps":{"./PuzzleConstants":12,"./PuzzleBoard":39,"../G":2,"../shared/Timer":11},"path":"preview-scripts/assets/src/puzzle/PuzzleScene.js"},{"deps":{},"path":"preview-scripts/assets/src/shared/GameRoot.js"},{"deps":{"./ReversiConstants":41},"path":"preview-scripts/assets/src/reversi/ReversiAI.js"},{"deps":{},"path":"preview-scripts/assets/src/reversi/ReversiPiece.js"},{"deps":{},"path":"preview-scripts/assets/src/shared/Streak.js"},{"deps":{"./SnakeConstants":13,"./SnakePiece":48},"path":"preview-scripts/assets/src/snake/SnakeBoard.js"},{"deps":{"./SnakeConstants":13},"path":"preview-scripts/assets/src/snake/SnakePiece.js"},{"deps":{},"path":"preview-scripts/assets/src/tetris/TetrisPiece.js"},{"deps":{"./TetrisBoard":52,"./TetrisConstants":15,"../G":2},"path":"preview-scripts/assets/src/tetris/TetrisScene.js"},{"deps":{"./SnakeBoard":47,"./SnakeConstants":13,"../G":2},"path":"preview-scripts/assets/src/snake/SnakeScene.js"},{"deps":{"./TetrisPiece":49},"path":"preview-scripts/assets/src/tetris/TetrisBoard.js"},{"deps":{},"path":"preview-scripts/assets/src/2048/M2048Constants.js"},{"deps":{"./M2048Piece":55,"./M2048Constants":53},"path":"preview-scripts/assets/src/2048/M2048Board.js"},{"deps":{},"path":"preview-scripts/assets/src/2048/M2048Piece.js"},{"deps":{"./M2048Board":54,"../G":2,"./M2048Constants":53},"path":"preview-scripts/assets/src/2048/M2048Scene.js"},{"deps":{},"path":"preview-scripts/assets/src/brick/BrickColor.js"},{"deps":{},"path":"preview-scripts/assets/src/brick/BrickLayout.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    