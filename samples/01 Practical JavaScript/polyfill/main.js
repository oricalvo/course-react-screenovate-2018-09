if(typeof JSON2 == "undefined") {
    window.JSON2 = {
        parse: function() {
        },
        stringify: function(obj) {
            return "xxx";
        },
    }
}

var obj = {
    id: 1,
    name: "Ori"
};

var str = JSON2.stringify(obj);

console.log(str);
