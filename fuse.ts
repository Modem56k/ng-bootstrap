const { FuseBox, WebIndexPlugin, JSONPlugin, HTMLPlugin, SassPlugin, CSSPlugin, RawPlugin, Sparky, QuantumPlugin } = require('fuse-box');
const { Ng2TemplatePlugin } = require('ng2-fused');
let fuse, app, vendor, pollyfills, glob, isProduction;

Sparky.task('config', () => {
    fuse = FuseBox.init({
        homeDir: `src`,
        output: `dist/$name.js`,
        target: 'browser',
        sourceMaps: { inline: true },
        plugins: [
            Ng2TemplatePlugin(),
            ['*.component.html', RawPlugin()],
            ['*.component.scss', SassPlugin({ outputStyle: 'compressed', importer: true }), RawPlugin(), CSSPlugin({
                outFile: (file) => `dist/styles/${file}`, inject: (file) => `styles/${file}`
            })],
            ['main.scss', SassPlugin({ outputStyle: 'compressed', importer: true }),
                CSSPlugin({ outFile: (file) => `dist/styles/${file}`, inject: (file) => `styles/${file}` })],
            ['*.scss', SassPlugin({ outputStyle: 'compressed', importer: true }),
                CSSPlugin({ outFile: (file) => `dist/${file}` })],
            WebIndexPlugin({ title: 'FuseBox + Angular', template: 'src/index.html' }),
            JSONPlugin(),
            HTMLPlugin({
                useDefault: false,
            }),
            isProduction && QuantumPlugin({
                uglify: true,
                hoisting: { names: ['tslib_1'] },
                treeshake: true
            })
        ]
    });

    pollyfills = fuse.bundle('pollyfills')
        .instructions(' > pollyfills.ts');

    vendor = fuse.bundle('vendor')
        .instructions('~ main.ts');

    app = fuse.bundle('app')
        .instructions('!> [main.ts]');
});

Sparky.task('test', ['config'], () => {
    fuse.bundle('app')
        .test('[**/**.test.ts]');
});

Sparky.task('build', ['config'], () => {
    fuse.run();
});

Sparky.task('default', ['config'], () => {
    fuse.dev({
        port: 8080,
        open: true
    });

    app.watch().hmr();

    fuse.run();
});

Sparky.task('copy:assets', () => {
    // ADD FILES COPYING HERE
    // return Sparky.watch('src/assets/**.*')
    // .clean('dist/assets/')
    // .dest('dist/assets/$name');
});
