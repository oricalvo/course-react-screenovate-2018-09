import * as React from "react";

interface CounterProps {
    counter: number;
    onInc: ()=>void;
    onDec: ()=>void;
}

export class Counter extends React.Component<CounterProps, {}> {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }
    }

    render() {
        console.log("Counter.render");

        return <div className="Counter">
            <button onClick={this.props.onDec}>Dec</button>
            <span>{this.props.counter}</span>
            <button onClick={this.props.onInc}>Inc</button>
        </div>
    }
}

