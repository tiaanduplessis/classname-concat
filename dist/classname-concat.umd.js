!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.classnameConcat=t()}(this,function(){function e(e){return"[object Function]"===Object.prototype.toString.call(e)}return function t(){for(var n=[],o=arguments.length;o--;)n[o]=arguments[o];return n.reduce(function(n,o){return"string"==typeof o?n+" "+o:null!==(r=o)&"[object Object]"===Object.prototype.toString.call(r)?n+" "+Object.keys(o).reduce(function(n,r){var c=o[r];return function(e){return"boolean"==typeof e}(c)&&c?n+" "+r:e(c)?n+(c()?" "+r:""):n+" "+t(c)},""):e(o)?n+" "+o():Array.isArray(o)?n+" "+t.apply(void 0,o):n;var r},"").replace(/\s{1,}/g," ").trim()}});
//# sourceMappingURL=classname-concat.umd.js.map