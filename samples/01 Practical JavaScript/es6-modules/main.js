import {run} from "./lib";

function log(message) {
    console.log("main>" + message);
}

function main() {
    log("main XXX");

    run();
}

main();

