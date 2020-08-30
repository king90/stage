(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.example = factory());
}(this, (function () { 'use strict';

    var copy = function copy(src, dest) {
      for (var i in src) {
        dest[i] = src[i];
      }

      return dest;
    };

    var index = {
      copy: copy
    };

    return index;

})));
