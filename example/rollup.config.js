// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: "src/index.js",
    output: [{
        file: "dist/example.cmd.js",
        format: "cjs",
    }, {
        file: "dist/example.amd.js",
        format: "amd",
    }, {
        file: "dist/example.esm.js",
        format: "esm",
    }, {
        file: "dist/example.umd.js",
        name: "example",
        format: "umd",
    }, {
        file: "dist/example.iife.js",
        name: "example",
        format: "iife",
    }],
    plugins: [
        resolve(),
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**' // 只编译我们的源代码
        }),
        commonjs()
    ]
};
