// function Contact(id, name, email) {
//     function print() {
//         console.log(name + " " + email);
//     }
//
//     return {
//         print,
//     }
// }
//
// var c1 = Contact(1, "Ori", "ori@gmail.com");
// var c2 = Contact(2, "Roni", "roni@gmail.com");
//
// c1.print();
// c2.print();
//

function Contact(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
}

Contact.prototype.print = function() {
    console.log(this.name + " " + this.email);
}

var c1 = new Contact(1, "Ori", "ori@gmail.com");
var c2 = new Contact(2, "Roni", "roni@gmail.com");

c1.print();
c2.print();

console.log(c1.print == c2.print);

