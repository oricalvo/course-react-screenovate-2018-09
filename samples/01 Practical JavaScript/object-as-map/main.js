var map = {};

map["a"] = 1;
map["b"] = 2;

// delete map["a"];
map["a"] = undefined;

for(var key in map) {
    console.log(key + ":" + map[key]);
}