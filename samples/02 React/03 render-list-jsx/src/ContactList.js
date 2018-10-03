class ContactList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: [
                {"id": 1, "name": "Ori"},
                {"id": 2, "name": "Roni"},
                {"id": 3, "name": "Udi"}
            ],
        }
    }

    render() {
        console.log("Counter.render");

        const {contacts} = this.state;

        return <ul>
            {
                contacts.map((c, index) => <li key={index}>
                    <span>{c.name}</span>
                    <button onClick={this.remove.bind(this, c, index)}>Delete</button>
                    <button onClick={this.noop}>Noop</button>
                </li>)
            }
        </ul>;

        // return e("ul", null,
        //     contacts.map((c, index) => e("li", {key: index},
        //         e("span", null, c.name),
        //         e("button", {onClick: this.remove.bind(this, c, index)}, "Delete"),
        //     ))
        // );
    }

    remove(contact, index) {
        const {contacts} = this.state;

        contacts.splice(index, 1);

        this.setState({
            contacts
        });
    }

    noop = () => {
    }
}

function doSomething() {
    console.log(this);
}
