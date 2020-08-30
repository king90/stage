const copy = (src, dest) => {
    for (let i in src) {
        dest[i] = src[i];
    }
    return dest;
};

export default copy;
