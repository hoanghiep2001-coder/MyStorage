System.register(["path", "fs", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _req, _req2, _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_path) {
      _req = _path.__cjsMetaURL;
    }, function (_fs) {
      _req2 = _fs.__cjsMetaURL;
    }, function (_unresolved_) {
      _loader = _unresolved_.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        var require = _loader.createRequireWithReqMap({
          "path": _req,
          "fs": _req2
        }, _require);

        (function () {
          function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

          function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

          var path = require("path");

          var fs = require('fs');

          var buildPathCocos = './build/';
          var buildPathTarget = './build-inline/';
          var exiapiPath = './plugin-ads/exitapi.js';
          var dapiPath = './plugin-ads/dapi.js';
          var mraidFixPath = './plugin-ads/fixmraid.js';
          var mindworkApiPath = './plugin-ads/mindworkapi.js';
          var tiktokApiPath = './plugin-ads/playable-sdk.js';
          var ironsourceApiPath = './plugin-ads/ironsource_api.js';
          var args = process.argv.slice(2);
          var adsNetwork;

          if (typeof args[0] == undefined) {
            adsNetwork = 'google';
          } else {
            adsNetwork = args[0];
          }

          console.log("Build html file for ads network " + adsNetwork + "\n");
          buildInlineHTML();

          function buildInlineHTML() {
            return _buildInlineHTML.apply(this, arguments);
          }

          function _buildInlineHTML() {
            _buildInlineHTML = _asyncToGenerator(function* () {
              if (!fs.existsSync(buildPathTarget)) fs.mkdirSync(buildPathTarget, {
                recursive: true
              });
              var htmlFileContent = yield fs.promises.readFile(buildPathCocos + "index.html", 'utf8'); // Remove CSS & favicon

              htmlFileContent = htmlFileContent.replace(/<link([\s\S]+?)\/>/g, '');

              if (adsNetwork == "google") {
                console.log("--- Add google ads script"); // htmlFileContent = await addScriptSourceToHTML(htmlFileContent, 'https://tpc.googlesyndication.com/pagead/gadgets/html5/api/exitapi.js', 'head')

                var dapiContent = yield fs.promises.readFile("" + exiapiPath, 'utf8');
                htmlFileContent = yield addScriptContentToHTML(htmlFileContent, dapiContent);
              }

              if (adsNetwork == "ironsource") {
                console.log("--- Add ironsources ads script");

                var _dapiContent = yield fs.promises.readFile("" + dapiPath, 'utf8');

                htmlFileContent = yield addScriptContentToHTML(htmlFileContent, _dapiContent);
                var apiContent2 = yield fs.promises.readFile("" + ironsourceApiPath, 'utf8');
                htmlFileContent = yield addScriptContentToHTML(htmlFileContent, apiContent2);
              }

              if (adsNetwork == "unity" || adsNetwork == "applovin") {
                console.log("--- Fix mraid For Unity & Applovin script");
                var mraidFixContent = yield fs.promises.readFile("" + mraidFixPath, 'utf8');
                htmlFileContent = yield addScriptContentToHTML(htmlFileContent, mraidFixContent);
              }

              if (adsNetwork == "mindwork") {
                console.log("--- Add mindwork ads script");
                var apiContent = yield fs.promises.readFile("" + mindworkApiPath, 'utf8');
                htmlFileContent = yield addScriptContentToHTML(htmlFileContent, apiContent);
              }

              if (adsNetwork == "tiktok") {
                console.log("--- Add tiktok ads script");

                var _apiContent = yield fs.promises.readFile("" + tiktokApiPath, 'utf8');

                htmlFileContent = yield addScriptContentToHTML(htmlFileContent, _apiContent, "body");
              }

              htmlFileContent = yield addScriptContentToHTML(htmlFileContent, injectCustomScript.toString() + ";injectCustomScript();", 'body');
              htmlFileContent = htmlFileContent.replace(/<\/script><script>/g, ';'); // add this to the end to increase confusion while reading html file
              //htmlFileContent = await addScriptContentToHTML(htmlFileContent, await bundleAssetToScript(), 'body')

              console.log('\n');
              htmlFileContent = htmlFileContent.replace(/<\/script><script>/g, ';');
              yield fs.promises.writeFile(buildPathTarget + "index_" + adsNetwork + ".html", htmlFileContent, 'utf8');
              console.log("Output saved to: " + buildPathTarget + "index_" + adsNetwork + ".html"); // const minifyOptions = {
              //     html: {
              //         removeOptionalTags: false
              //     },
              // };
              // const minifyFileContent = await minify(`${buildPathTarget}index-full.html`, minifyOptions)
              // await fs.promises.writeFile(`${buildPathTarget}index.html`, minifyFileContent, 'utf8');
              // console.log(`Minify File saved to: ${buildPathTarget}index.html (${await formatBytes(minifyFileContent.length)})`)
            });
            return _buildInlineHTML.apply(this, arguments);
          }

          function injectCustomScript() {
            setTimeout(window.boot, 1);

            window.CustomCreateScript = function () {
              var scriptElement = document.createElement('script');

              scriptElement.removeEventListener = function () {};

              scriptElement.addEventListener = function (eventName, cb) {
                this.src = '';
                if (eventName === 'load') setTimeout(() => {
                  cb && cb();
                }, 10);
              };

              return scriptElement;
            };

            var xmlHttp = window.CustomXMLHttpRequest = function () {};

            xmlHttp.prototype.send = function () {};

            xmlHttp.prototype.open = function (method, url) {
              var self = this;
              this.status = 200;
              this.url = url;
              this.isloaded = true;
              var jsonExtension = url.match(/\.(json)(\?[a-z0-9=&.]+)?$/);
              var imageExtension = url.match(/\.(jpe?g|png|svg|bmp|gif)(\?[a-z0-9=&.]+)?$/);
              var audioExtension = url.match(/\.(wav|mp3|ogg)(\?[a-z0-9=&.]+)?$/);

              if (jsonExtension) {
                this.response = atob(window.bundleAsset[url]);
              } else if (imageExtension) {
                this.isloaded = false;
                fetch(window.bundleAsset[url]).then(res => res.blob()).then(res => {
                  self.response = res;
                  self.onload && self.onload();
                });
              } else if (audioExtension) {
                this.response = Uint8Array.from(atob(window.bundleAsset[url]), c => c.charCodeAt(0)).buffer;
              }
            };

            xmlHttp.prototype.setRequestHeader = function () {};

            xmlHttp.prototype.send = function () {
              this.isloaded && this.onload && this.onload();
            };
          }

          function addScriptToHTML(_x, _x2, _x3) {
            return _addScriptToHTML.apply(this, arguments);
          }

          function _addScriptToHTML() {
            _addScriptToHTML = _asyncToGenerator(function* (htmlFileContent, scriptPath, htmlTag) {
              if (htmlTag === void 0) {
                htmlTag = 'head';
              }

              var scriptContent = yield fs.promises.readFile(scriptPath, 'utf8');
              return addScriptContentToHTML(htmlFileContent, scriptContent, htmlTag);
            });
            return _addScriptToHTML.apply(this, arguments);
          }

          function addScriptContentToHTML(_x4, _x5, _x6, _x7) {
            return _addScriptContentToHTML.apply(this, arguments);
          }

          function _addScriptContentToHTML() {
            _addScriptContentToHTML = _asyncToGenerator(function* (htmlFileContent, scriptContent, htmlTag, scriptTag) {
              if (htmlTag === void 0) {
                htmlTag = 'head';
              }

              if (scriptTag === void 0) {
                scriptTag = 'script';
              }

              // console.log(`Add ${scriptTag} to HTML <${htmlTag}>: ` + (scriptContent.substr(0, 50)))
              var lastIndex = htmlFileContent.lastIndexOf("</" + htmlTag + ">");
              return htmlFileContent.substr(0, lastIndex) + "<" + scriptTag + ">" + scriptContent + "</" + scriptTag + ">" + htmlFileContent.substr(lastIndex);
            });
            return _addScriptContentToHTML.apply(this, arguments);
          }

          function addScriptSourceToHTML(_x8, _x9, _x10, _x11) {
            return _addScriptSourceToHTML.apply(this, arguments);
          }

          function _addScriptSourceToHTML() {
            _addScriptSourceToHTML = _asyncToGenerator(function* (htmlFileContent, scriptSrc, htmlTag, scriptTag) {
              if (htmlTag === void 0) {
                htmlTag = 'head';
              }

              if (scriptTag === void 0) {
                scriptTag = 'script';
              }

              // console.log(`Add ${scriptTag} to HTML <${htmlTag}>: ` + scriptSrc)
              var lastIndex = htmlFileContent.lastIndexOf("</" + htmlTag + ">");
              return htmlFileContent.substr(0, lastIndex) + "<" + scriptTag + " type=\"text/javascript\" src=\"" + scriptSrc + "\"></" + scriptTag + ">" + htmlFileContent.substr(lastIndex);
            });
            return _addScriptSourceToHTML.apply(this, arguments);
          }
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=build-inline.js.map