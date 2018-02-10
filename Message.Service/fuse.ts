import { FuseBox } from 'fuse-box';
let fuse, app;

fuse = FuseBox.init({
  homeDir: `src`,
  output: `dist/$name.js`,
  target: 'browser@es6',
  plugins: []
});

fuse.bundle('app')
  .test('[**/**.test.ts]');

fuse.run();
