class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [{
        "id": 1,
        "name": "Ori"
      }, {
        "id": 2,
        "name": "Roni"
      }, {
        "id": 3,
        "name": "Udi"
      }]
    };
  }

  render() {
    console.log("Counter.render");
    const {
      contacts
    } = this.state;
    return React.createElement("ul", null, contacts.map((c, index) => React.createElement("li", {
      key: index
    }, React.createElement("span", null, c.name), React.createElement("button", {
      onClick: this.remove.bind(this, c, index)
    }, "Delete")))); // return e("ul", null,
    //     contacts.map((c, index) => e("li", {key: index},
    //         e("span", null, c.name),
    //         e("button", {onClick: this.remove.bind(this, c, index)}, "Delete"),
    //     ))
    // );
  }

  remove(contact, index) {
    const {
      contacts
    } = this.state;
    contacts.splice(index, 1);
    this.setState({
      contacts
    });
  }

}

function doSomething() {
  console.log(this);
}