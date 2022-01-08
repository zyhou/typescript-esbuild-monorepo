const fs = require('fs');
const esbuild = require('esbuild');
const childProcess = require('child_process');

const core = JSON.parse(fs.readFileSync('../project-core/package.json', 'utf-8'));
const api = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

// pure ESM packages that also have to be transpiled
const esms = new Set(['d3-shape', 'node-fetch']);
const external = [...Object.keys(core.dependencies), ...Object.keys(api.dependencies)].filter(
    (x) => !esms.has(x),
);

let proc;

const onRebuild = () => {
    proc?.kill();
    proc = childProcess.spawn('node', ['dist/server.js'], {
        stdio: 'inherit',
        stderr: 'inherit',
        detached: false,
    });
};

esbuild
    .build({
        bundle: true,
        entryPoints: ['src/server.ts'],
        external,
        logLevel: 'info',
        minify: true,
        outfile: 'dist/server.js',
        platform: 'node',
        sourcemap: true,
        target: ['node16'],
        watch: { onRebuild },
    })
    .then(onRebuild);
