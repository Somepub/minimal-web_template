# minimal-web_template

## What is this?

This is a web_development environment template.
Usually, people use Webpack, Rollup, or Parcel to develop with WEB.
I'm not a big fan of those, and there is always an alternative.

### Dependencies installed
- estrella (esbuild) [https://github.com/rsms/estrella] [https://github.com/evanw/esbuild]
- esbuild-plugin-sass (currently not working v0.5.1) [https://github.com/koluch/esbuild-plugin-sass]
- livereload [https://github.com/napcs/node-livereload]
- preact [https://preactjs.com/guide/v10/getting-started]
- Caddy  [https://caddyserver.com/docs/]

### Dependencies used for
- estrella: Used as a bundler, that can watch source files and make changes to outDir.
- esbuild-plugin-sass: A esbuild plugin, that compiles sccs files to css
- livereload: Livereload code
- Preact: React alternative (Much smaller)
- Caddy: DevServer
### DevServer
This template uses Caddy as a DevServer

To write devServer config and proxies:: edit - Caddyfile

### Pros
- Bundler is x10 faster than Webpack, Rollup, or Parcel (Any bundler made with JS)
- Bundler uses minimal dependencies
- Easier to write bundle conf
- Caddy is more extensible and performant than webpack DevServer or rollup plugin serve
- Preact has a smaller lib size than React

### Cons
- Bundler is fairly new, which means there could be issues that you can't find the right answer in GitHub or StackOverflow
- Bundler doesn't have a wide range of plugins (Like systemJS, which may be coming soon?)
- Minimal docs @ esbuild && estrella
- Caddy setup and install is not "out of the box"
- Preact doesn't support everything


### What does "build.js" do?
Build.js does the following:
- Bundle index.tsx file with esbuild
- Watch files with estrella
- Clear and make dist directory
- Execute extra logic for css and scss watch
- Generate HTML

### Known Issues
- https://serverfault.com/questions/807883/caddy-listen-tcp-443-bind-permission-denied