var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},t=e.parcelRequire94c2;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){n[e]=r},e.parcelRequire94c2=t),t.register("jCLg5",(function(e,r){function n(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var t=function(){function e(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.nro_secreto=r}var r,t,o;return r=e,(t=[{key:"adivinar",value:function(e){this.resultado=e==this.nro_secreto}},{key:"ganoElJuego",value:function(){return this.resultado}}])&&n(r.prototype,t),o&&n(r,o),e}();e.exports.default=t}));var o,a=(o=t("jCLg5"))&&o.__esModule?o:{default:o};var u=document.querySelector("#numero"),i=document.querySelector("#cb-form"),l=document.querySelector("#resultado");i.addEventListener("submit",(function(e){e.preventDefault();var r=new a.default("7");if(r.adivinar(u.value),r.ganoElJuego()){l.innerHTML="Ganaste!!"}}));
//# sourceMappingURL=index.ddc6e4b1.js.map
