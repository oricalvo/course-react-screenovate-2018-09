function Timer(interval) {
    this.interval = interval;
    this.intervalId = null;
    this.subscribers = [];
}

Timer.prototype.start = function() {
    var me = this;

    if(me.intervalId) {
        return;
    }

    me.intervalId = setInterval(function() {
        for(var s of me.subscribers) {
            s();
        }
    }, me.interval);
}

Timer.prototype.subscribe = function(subscriber) {
    var me = this;

    me.subscribers.push(subscriber);

    return function() {
        var index = me.subscribers.indexOf(subscriber);
        if(index != -1) {
            me.subscribers.splice(index, 1);
        }
    }
}

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
