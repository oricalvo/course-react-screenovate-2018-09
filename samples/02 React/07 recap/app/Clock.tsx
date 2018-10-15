import * as React from "react";

// export const Clock = (props) => {
//     const now = new Date();
//
//     return (<span>
//         {now.toLocaleTimeString()}
//     </span>);
// }

// export interface ClockState {
//     time: Date;
// }
//
// export class Clock extends React.Component<{}, ClockState> {
//     intervalId;
//
//     constructor(props) {
//         super(props);
//
//         console.log("Clock.ctor");
//
//         this.state = {
//             time: new Date(),
//         }
//     }
//
//     componentWillMount() {
//         console.log("Clock.componentWillMount");
//
//         this.intervalId = setInterval(() => {
//             const now = new Date();
//
//             this.setState({
//                 time: now,
//             })
//         }, 1000);
//     }
//
//     componentWillUnmount() {
//         console.log("Clock.componentWillUnmount");
//     }
//
//     render() {
//         console.log("Clock.render");
//
//         const {time} = this.state;
//
//         return (<span>
//             {time.toLocaleTimeString()}
//         </span>);
//     }
// }

export interface ClockProps {
    time: Date;
}

export class Clock extends React.Component<ClockProps, {}> {
    constructor(props) {
        super(props);

        console.log("Clock.ctor");
    }

    componentWillMount() {
        console.log("Clock.componentWillMount");
    }

    componentWillUnmount() {
        console.log("Clock.componentWillUnmount");
    }

    render() {
        console.log("Clock.render");

        const {time} = this.props;

        return (<span>
             {time.toLocaleTimeString()}
        </span>);
    }
}
