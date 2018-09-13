var lib = require("./lib");

function log(message) {
    console.log("main> " + message);
}

function main() {
    log("main BEGIN");

    lib.run();

    log("main END");
}

main();

