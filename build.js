const { build, scandir, watch, cliopts } = require("estrella");
const { sassPlugin } = require("@es-pack/esbuild-sass-plugin");
const fs = require("fs");

const outDir = "dist/";
const outFile = "index";
const outJs = outDir + outFile + ".js";
const outHtml = outDir + outFile + ".html";

fs.rmdirSync(outDir, { recursive: true });
fs.mkdir(outDir, { recursive: true }, (e) => void 0);

build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  outfile: outJs,
  plugins: [sassPlugin()],
  logLevel: "error",
  color: true,
}).catch((e) => console.error(e.message));

function reloadOtherExt(file) {
  console.info(`Reloading file ${file}`);
  const ext = file.split(".")[1];
  switch (ext) {
    case "scss":
    case "css":
      build({
        entryPoints: ["src/index.tsx"],
        bundle: true,
        outfile: outJs,
        plugins: [sassPlugin()],
        logLevel: "error",
        color: true,
      });
      break;

    default:
      break;
  }
}

const dir = "src",
  filter = /\..*$/i;
scandir(dir, filter, { recursive: true }).then((files) => {
  cliopts.watch &&
    watch(dir, { filter, recursive: true }, (changes) => {
      changes.map((c) => reloadOtherExt(c.name));
    });
});

cliopts.watch &&
  require("livereload")
    .createServer()
    .watch(__dirname + "/dist");

fs.writeFileSync(
  outHtml,
  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ChineseDurak</title>
  <link rel="stylesheet" href="${outFile}.css" />
  <script>
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>')
  </script>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="${outFile}.js"></script>
</body>
</html>
`
);
