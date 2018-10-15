import * as React from "react";
import {Clock} from "./Clock";

interface AppState {
    counter: number;
    time: Date;
}

export class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props);

        this.state = {
            counter: 10,
            time: new Date(),
        };
    }

    render() {
        console.log("App.render");

        const {time} = this.state;

        return <div className="App">
            <h1>Hello React</h1>

            <button onClick={this.update}>Update Time</button>

            <Clock time={time} />
        </div>
    }

    update = () => {
        this.setState({
            time: new Date(),
        });
    }
}

