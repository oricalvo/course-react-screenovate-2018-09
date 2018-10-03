class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }

        this.dec = () => {
            console.log("dec");

            this.setState({
                counter: this.state.counter - 1
            });
        }

        this.inc = () => {
            console.log("inc");

            this.setState({
                counter: this.state.counter + 1
            });
        }
    }

    render() {
        console.log("Counter.render");

        const {counter} = this.state;

        return e("div", null,
            e("button", {onClick: this.dec}, "Dec"),
            e("span", null, counter),
            e("button", {onClick: this.inc}, "Inc"),
        );
    }
}

function doSomething() {
    console.log(this);
}
