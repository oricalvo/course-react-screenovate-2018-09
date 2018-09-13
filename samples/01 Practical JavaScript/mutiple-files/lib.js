function log(message) {
    console.log("lib> " + message);
}

function run() {
    log("run BEGIN");

    log("run END");
}

exports.run = run;
