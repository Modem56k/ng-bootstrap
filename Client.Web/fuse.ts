const { FuseBox, WebIndexPlugin, JSONPlugin, HTMLPlugin, SassPlugin, CSSPlugin, RawPlugin, Sparky, QuantumPlugin } = require('fuse-box');
const { Ng2TemplatePlugin } = require('ng2-fused');
let fuse, app, vendor, pollyfills, glob, isProduction;

Sparky.task('config', () => {
  fuse = FuseBox.init({
    homeDir: `src`,
    output: `dist/$name.js`,
    target: 'browser',
    plugins: [
      Ng2TemplatePlugin(),
      ['*.html', RawPlugin()],
      WebIndexPlugin({
        title: 'FuseBox + Angular',
        template: 'src/index.html',
      }),
      ['*.component.scss', RawPlugin()],
      [SassPlugin(), CSSPlugin()],
      CSSPlugin(),
      JSONPlugin(),
      HTMLPlugin({
        useDefault: false,
      }),
      // http://fuse-box.org/page/quantum
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
    .sourceMaps({ inline: true })
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
