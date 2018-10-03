import * as React from "react";
import {Counter} from "./Counter";

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

            <Counter counter={this.state.counter}
                     onInc={this.onInc}
                     onDec={this.onDec}/>
        </div>
    }

    onInc = ()=> {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    onDec = ()=> {
        this.setState({
            counter: this.state.counter - 1
        });
    }
}

