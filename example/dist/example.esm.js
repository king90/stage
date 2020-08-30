var copy = function copy(src, dest) {
  for (var i in src) {
    dest[i] = src[i];
  }

  return dest;
};

var index = {
  copy: copy
};

export default index;
