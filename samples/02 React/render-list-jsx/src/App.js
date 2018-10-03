class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("App.render");

        return <div>
            <h1>Hello React</h1>
            <ContactList />
        </div>;
    }
}
