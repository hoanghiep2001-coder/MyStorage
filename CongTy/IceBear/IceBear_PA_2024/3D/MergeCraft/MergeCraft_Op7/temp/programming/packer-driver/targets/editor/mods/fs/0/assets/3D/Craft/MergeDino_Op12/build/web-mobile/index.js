System.register(["__unresolved_0"], function (_export2, _context2) {
  "use strict";

  var _loader, _cjsExports, __cjsMetaURL;

  _export2("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _loader = _unresolved_.default;
    }],
    execute: function () {
      _loader.define(_context2.meta.url, function (exports, _require, module, __filename, __dirname) {
        let require = _loader.createRequireWithReqMap({}, _require);

        (function () {
          System.register(["./application.js"], function (_export, _context) {
            "use strict";

            var createApplication, canvas, $p, bcr;

            function loadJsListFile(url) {
              return new Promise(function (resolve, reject) {
                var err;

                function windowErrorListener(evt) {
                  if (evt.filename === url) {
                    err = evt.error;
                  }
                }

                window.addEventListener('error', windowErrorListener);
                var script = document.createElement('script');
                script.charset = 'utf-8';
                script.async = true;
                script.crossOrigin = 'anonymous';
                script.addEventListener('error', function () {
                  window.removeEventListener('error', windowErrorListener);
                  reject(Error('Error loading ' + url));
                });
                script.addEventListener('load', function () {
                  window.removeEventListener('error', windowErrorListener);
                  document.head.removeChild(script); // Note that if an error occurs that isn't caught by this if statement,
                  // that getRegister will return null and a "did not instantiate" error will be thrown.

                  if (err) {
                    reject(err);
                  } else {
                    resolve();
                  }
                });
                script.src = url;
                document.head.appendChild(script);
              });
            }

            function fetchWasm(url) {
              return url;
            }

            function findCanvas() {
              var frame = document.querySelector('#GameDiv');
              var container = document.querySelector('#Cocos3dGameContainer');
              var canvas = document.querySelector('#GameCanvas');
              canvas.setAttribute('tabindex', '99');
              return {
                frame: frame,
                container: container,
                canvas: canvas
              };
            }

            function addClass(element, name) {
              var hasClass = (' ' + element.className + ' ').indexOf(' ' + name + ' ') > -1;

              if (!hasClass) {
                if (element.className) {
                  element.className += ' ';
                }

                element.className += name;
              }
            }

            return {
              setters: [function (_applicationJs) {
                createApplication = _applicationJs.createApplication;
              }],
              execute: function () {
                canvas = document.getElementById('GameCanvas');
                $p = canvas.parentElement;
                bcr = $p.getBoundingClientRect();
                canvas.width = bcr.width;
                canvas.height = bcr.height;
                createApplication({
                  loadJsListFile: loadJsListFile,
                  fetchWasm: fetchWasm
                }).then(function (application) {
                  return application.start({
                    findCanvas: findCanvas
                  });
                })["catch"](function (err) {
                  console.error(err);
                });
              }
            };
          });
        })();

        _export2("default", _cjsExports = module.exports);
      });

      _export2("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);
    }
  };
});
//# sourceMappingURL=index.js.map