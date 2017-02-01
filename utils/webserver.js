var WebpackDevServer = require("webpack-dev-server"),
    webpack = require("webpack"),
    config = require("../webpack.config"),
    env = require("./env"),
    fs = require("fs"),
    path = require("path");

require("./prepare");

var options = (config.chromeExtensionBoilerplate || {});
var excludeEntriesToHotReload = (options.notHotReload || []);

for (var entryName in config.entry) {
  if (excludeEntriesToHotReload.indexOf(entryName) === -1) {
    config.entry[entryName] =
      [
        ('webpack-dev-server/client?https://' + require("ip").address() + ':443'),
          "webpack/hot/only-dev-server",
      ].concat(config.entry[entryName]);
  }
}

config.plugins =
  [new webpack.HotModuleReplacementPlugin()].concat(config.plugins || []);

var compiler = webpack(config);

var server =
  new WebpackDevServer(compiler, {
    hot: true,
    https: {
      cert: fs.readFileSync(path.join(__dirname, "../localhost-public.pem")),
      key: fs.readFileSync(path.join(__dirname, "../localhost-private.pem"))
    },
    inline: true,
    contentBase: path.join(__dirname, "../build"),
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
  });

server.listen(443);
