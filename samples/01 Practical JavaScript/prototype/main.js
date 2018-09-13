function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.print = function() {
    console.log(this.x + ", " + this.y);
}

function PointEx(x,y,z) {
    Point.call(this, x, y);

    this.z = z;
}

PointEx.prototype = Object.create(Point.prototype);

PointEx.prototype.print = function() {
    Point.prototype.print.call(this);

    console.log(this.z);
}

// PointEx.prototype.print = Point.prototype.print;

var pt1 = new PointEx(5, 10, 20);
var pt2 = new PointEx(20, 20, 20);

console.log(pt1 instanceof PointEx);
console.log(pt1 instanceof Object);
console.log(pt1 instanceof Point);

pt1.print();
pt2.print();

// console.log(Point.__proto__ == Function.prototype);
// console.log(Function.prototype.__proto__ == Object.prototype);
// console.log(Object.prototype.__proto__);
