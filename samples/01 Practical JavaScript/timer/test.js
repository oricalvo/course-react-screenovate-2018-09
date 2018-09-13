function test() {
    var timer = new Timer(1500);

    var off1 = timer.subscribe(function() {
        console.log("tick1");
    });

    var off2 = timer.subscribe(function() {
        console.log("tick2");
    });

    timer.start();

    setTimeout(function() {
        off1();
    }, 5000);
}

test();
