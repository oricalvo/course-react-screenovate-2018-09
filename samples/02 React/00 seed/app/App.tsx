import * as React from "react";

interface AppState {
    counter: number;
}

export class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props);

        this.state = {
            counter: 10,
        };
    }

    render() {
        console.log("App.render");

        return <div className="App">
            <h1>Hello React</h1>
        </div>
    }
}

