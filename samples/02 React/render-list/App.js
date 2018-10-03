class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("App.render");

        return e("div", null,
            e("h1", null, "Hello React"),
            e(ContactList)
        );
    }
}
