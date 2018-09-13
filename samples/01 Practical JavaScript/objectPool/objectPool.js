function ObjectPool() {
    var map = {};
    var count = 0;

    function add(obj) {
        var hashCode = getObjectId(obj);

        if(map[hashCode]) {
            return;
        }

        map[hashCode] = obj;
        ++count;
    }

    function size() {
        return count;
    }

    function pull() {
        for(var key in map) {
            var obj = map[key];
            delete map[key];
            --count;
            return obj;
        }

        return null;
    }

    function print() {
        console.log("pool " + count);
    }

    return {
        add,
        size,
        pull,
        print,
    };
}

var getObjectId = (function() {
    var nextId = 1000;
    var MAGIC_FIELD = "###blabla###";

    return function(obj) {
        var id = obj[MAGIC_FIELD];
        if(!id) {
            id = obj[MAGIC_FIELD] = ++nextId;
        }

        return id;
    }
})();



