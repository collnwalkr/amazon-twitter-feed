var manifest = require("../src/manifest.json"),
    fileSystem = require("fs"),
    path = require("path"),
    package = require("../package.json")
    env = require("./env");

// generates the manifest file using the package.json informations
manifest.description = package.description;
manifest.version = package.version;

fileSystem.writeFileSync(
  path.join(__dirname, "../build/manifest.json"),
  JSON.stringify(manifest)
);
